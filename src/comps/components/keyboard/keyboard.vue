<template>
  <transition name="fade">
	<div class="xm__keyboard" v-if="isVisible" :style="{fontSize: fontSize + 'px' }">
		<div class="xm__mask" @click="maskClose"></div>
    <div class="xm__keyboard--dialog" @touchmove.stop.prevent>
      <div class="number-input-area">
          <span>{{tips.title}}</span>
          <div class="number-input">
            <input type="text" :placeholder="tips.placeholder" disabled v-model="values" :maxlength="len">
          </div>
          <b class="number-unit" v-if="!tips.isCard">{{tips.unit}}</b>
        </div>
      <div class="xm__keyboard--content">
        <div class="xm__keyboard--body">
          <ul class="list-wrap">
            <li class="list-item" v-for="i in 9" :key="i" @click="onKeyDown(keyNumberList[i-1], $event)">{{keyNumberList[i-1]}}</li>
            <li v-if="tips.isCard" class="list-item" @click="onKeyDown('X', $event)">X</li>
            <li v-else class="list-item" :class="{'no-bg': isInteger}" @click="onKeyDown('.', $event)">{{ isInteger ? '' : '.'}}</li>
            <li class="list-item" @click="onKeyDown(keyNumberList[9], $event)">{{keyNumberList[9]}}</li>
            <li class="list-item slidedown" @click="maskClose"><i class="xm__icon--kb-hide"></i></li>
            <!-- <li v-else class="list-item no-bg delete" @click="onDelete($event)"><i class="xm__icon--kb-del"></i></li> -->
          </ul>
        </div>
        <div class="xm__keyboard--operate">
          <ul class="list-wrap">
            <li class="list-item delete" @click="onDelete($event)"><i class="xm__icon--kb-del"></i></li>
            <li class="list-item confirm" @click="onConfirm(values)">{{confirmText}}</li>
          </ul>
        </div>
      </div>
    </div>
	</div>
		</transition>
</template>

<script>
export default {
  name: 'xm-keyboard',
  data () {
    return {
      fontSize: 50, // 动态计算键盘的字体大小
      isShowPopup: false, // 是否显示外部弹窗
      isShowPopupBox: false, // 是否显示内部内容
      keyNumberList: [], // 数字列表
      values: '', // 当前输入的值
      isVisible: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    visible: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    disorder: { // 数字键盘是否乱序
      type: Boolean,
      default: false
    },
    styleName: { // 数字键盘风格
      type: String,
      default: 'dot' // dot（有确认键和小数点，一般用于价格或金额输入、card（有确认键和x，一般用于身份证输入）
    },
    confirmText: { // 键盘确认键文案
      type: String,
      default: '确定'
    },
    isInteger: { // 是否是整数
      type: Boolean,
      default: false
    },
    tips: {
      type: Object
    },
    len: { // 限制输出值的长度
      type: Number,
      default: 6
    }
  },
  watch: {
    visible (val) {
      this.isVisible = val
      this.values = this.$props.value.replace(this.tips.unit, '')
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      const keyNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      if (this.disorder) {
        let count = 0
        let temp = null
        let index = null
        while (count < 10) {
          index = count + parseInt(Math.random() * (10 - count), 10)
          temp = keyNumberList[index]
          keyNumberList[index] = keyNumberList[count]
          keyNumberList[count] = temp
          ++count
        }
      }
      this.keyNumberList = keyNumberList
      this.computeFontSize()
    },
    active () {
      this.isVisible = true
    },
    show () {
      this.isShowPopup = true
      this.$nextTick(() => {
        this.isShowPopupBox = true
      })
    },
    hide () {
      this.isShowPopupBox = false
    },
    transitionEnd () {
      if (!this.isVisible) {
        this.isVisible = false
      }
    },
    computeFontSize () {
      this.fontSize = ((document.body.clientWidth > 540 ? 540 : document.body.clientWidth) / 375 * 50).toFixed(2)
    },
    // 按键值
    onKeyDown (key, e) {
      e.stopImmediatePropagation()
      // if (key === '.' && this.isInteger) {
      //   return
      // }
      if (key === '.' && this.values.indexOf('.') !== -1) {
        return
      }
      this.values += key
    },
    // 隐藏
    onSlideDown () {
      this.isVisible = false
    },
    // 删除
    onDelete (e) {
      e.stopImmediatePropagation()
      if (this.values && this.values !== '') {
        this.values = this.values.substring(0, this.values.length - 1)
      }
      // this.$emit('delete');
    },
    // 确认
    onConfirm (val) {
      if (val.indexOf('.') === val.length - 1) {
        this.$toast.text({content: '请输入有效数字', direction: 'center'})
        return
      }
      if (!this.tips.isCard && val.length > this.$props.len) {
        this.$toast.text({content: `长度不能超过${this.$props.len}位`, direction: 'center'})
        return
      }
      if (this.tips.isCard) {
        const result = this.checkIdCard(val)
        if (result.status === 0) {
          this.$toast.text({content: `${result.msg}`, direction: 'center'})
          return
        }
      }
      let unit = !this.tips.isCard ? this.$props.tips.unit : ''
      const data = { val, unit, name: this.$props.tips.name }
      console.log(data)
      this.$emit('confirm', data)
    },
    close () {
      this.$emit('close')
    },
    maskClose () {
      if (this.maskClosable) {
        this.close()
      }
    },
    checkIdCard (id) {
     // 1 "验证通过", 0 //校验不通过
      const format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/
        // 号码规则校验
      if (!format.test(id)) {
        return {'status': 0, 'msg': '身份证号码不正确'}
      }
        // 区位码校验
        // 出生年月日校验   前正则限制起始年份为1900;
      let year = id.substr(6, 4) // 身份证年
      let month = id.substr(10, 2) // 身份证月
      let date = id.substr(12, 2) // 身份证日
      let time = Date.parse(month + '-' + date + '-' + year) // 身份证日期时间戳date
      let nowTime = Date.parse(new Date()) // 当前时间戳
      let dates = (new Date(year, month, 0)).getDate()// 身份证当月天数
      if (time > nowTime || date > dates) {
        return {'status': 0, 'msg': '出生日期不正确'}
      }
        // 校验码判断
      const c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]   // 系数
      const b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']  // 校验码对照表
      let idArray = id.split('')
      let sum = 0
      for (let k = 0; k < 17; k++) {
        sum += parseInt(idArray[k]) * parseInt(c[k])
      }
      if (idArray[17].toUpperCase() !== b[sum % 11].toUpperCase()) {
        return {'status': 0, 'msg': '身份证号码不正确'}
      }
      return {'status': 1, 'msg': '校验通过'}
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.body.appendChild(this.$el)
      if (this.isVisible) {
        this.active()
      }
    })
  },
  beforeDestroy () {
    this.$el.remove()
  }
}
</script>

