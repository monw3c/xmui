<template>
  <div class="wrap">
    <h1><img src="../assets/logo.png"/></h1>
    <h3>{{ msg }}</h3>

    <h2>基础组件</h2>
    <h4>按钮</h4>
    <xm-button>普通按钮</xm-button>
    <xm-button type="primary" @click="btnClick" icon="xm__icon--checked" >primary按钮</xm-button>
    <xm-button type="error" icon="xm__icon--checked" ></xm-button>
    <xm-button type="warning" disabled>禁止按钮</xm-button>
    <xm-button plain>简约按钮</xm-button>
    <xm-button type="text" icon="xm__icon--checked">文字按钮</xm-button>
    <xm-button loading type="success">loading状态按钮</xm-button>
    <xm-button bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</xm-button>
    <br/><br/>
    <xm-button bg-color="#fcb" color="#e0439a" border-color="#fcb" block no-radius class="btn__block">无圆角的块按钮</xm-button>
    <br/>
    <xm-button round long>圆角长按钮</xm-button>
    <br/><br/>
    <xm-button-group class="btn__group">
      <xm-button type="warning">警告按钮</xm-button>
      <xm-button type="primary" @click="btnClick" icon="xm__icon--checked" >primary按钮</xm-button>
      <xm-button type="success" icon="xm__icon--loading">success按钮</xm-button>
    </xm-button-group>
    

    <h4>标签</h4>
    <xm-tag>普通</xm-tag>
    <xm-tag type="primary">primary</xm-tag>
    <xm-tag type="success">success</xm-tag>
    <xm-tag type="warning" round>warning</xm-tag>
    <xm-tag type="error" round>error</xm-tag>
    <xm-tag bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</xm-tag>
    <xm-tag type="success" v-if="tag1" closable @close="tag1=false">success</xm-tag>

    <h4>搜索框</h4>
    <p style="text-align:left">input方法监听的值：{{inputValue}}</p>
    <form action="/"><xm-search bg-color="#09c" @action="searchAction" v-model="value" action-text-color="#fff"></xm-search></form>
    <xm-search placeholder="自定义placeholder" v-model="value" show-action @action="searchAction" @input="inputAction" action-text-color="#2d8cf0">search</xm-search>


    <h4>加载更多</h4>
    <xm-loadmore @action="loadMore"></xm-loadmore>
    <xm-loadmore icon color="#2d8cf0">loading...</xm-loadmore>
    <xm-loadmore no-data>暂无数据</xm-loadmore>
    <xm-loadmore no-data>▪</xm-loadmore>


    <h4>表单</h4>
    <div class="form-demo">
      <xm-cell-group>
        <!-- <div slot="top">头部的</div> -->
        <xm-cell-item>
          <span slot="left">用户名：</span>
          <xm-input slot="right" v-model="value1" name="name1" max="10" placeholder="请输入用户名" @blur="inputAction1" @focus="inputAction2"></xm-input>
        </xm-cell-item>
        <xm-cell-item>
          <span slot="left">密  码：</span>
          <xm-input slot="right" type="password" v-model="value1" placeholder="请输入密码"></xm-input>
        </xm-cell-item>
        <xm-cell-item>
          <span slot="leftIcon" class="xm__icon--phone"></span>
          <xm-input slot="right" type="tel" v-model="value1" placeholder="请输入手机号"></xm-input>
          <xm-button slot="right" type="warning" class="btn__block" style="padding: 6px;width: 120px;font-size: 12px;">获取验证码</xm-button>
        </xm-cell-item>
        <xm-cell-item>
          <xm-input slot="right" :value="value1" placeholder="这里是readonly" readonly></xm-input>
          <span slot="rightIcon" class="xm__icon--delete"></span>
        </xm-cell-item>
        <xm-cell-item>
          <xm-input slot="right" :value="value1" placeholder="这里是disabled"   disabled></xm-input>
          <span slot="rightIcon" class="xm__icon--delete"></span>
        </xm-cell-item>
        <xm-cell-item type='link' href="tel:400517517">
          <span slot="leftIcon" class="xm__icon--contact"></span>
          <span slot="left">联系方式</span>
          <span slot="right">400517517</span>
          <span slot="rightIcon" class="xm__icon--right"></span>
        </xm-cell-item>
        <xm-cell-item>
          <span slot="left">我的消息</span>
          <xm-tag slot="right" type="error" round style="margin-bottom:0;">8</xm-tag>
          <span slot="rightIcon" class="xm__icon--right"></span>
        </xm-cell-item>
        <xm-cell-item>
          <xm-textarea slot="right" placeholder="请输入留言，50字以内" :value="value" @input="textareaAction" maxlength="50"></xm-textarea>
        </xm-cell-item>
        <xm-cell-item>
          <xm-select slot="right" :data="selectList" @change="selectAction"></xm-select>
          <span slot="rightIcon" class="xm__icon--right"></span>
        </xm-cell-item>
        <xm-cell-item>
          <span slot="left">出行方式</span>
          <xm-select slot="right" right :data="selectList"></xm-select>
          <span slot="rightIcon" class="xm__icon--right"></span>
        </xm-cell-item>
        <xm-cell-item>
          <span slot="left">是否保存</span>
          <xm-switch slot="right" value="switch" @input="switchAction"></xm-switch>
        </xm-cell-item>
        <div slot="bottom" style="overflow: hidden;word-break: break-all;text-align: left;padding-left: 10px;font-size: 14px;">
          <p>您输入：{{inputVal}}</p>
          <p>留言：{{textareaVal}}</p>
          <p>出行方式：{{selectVal}}</p>
          <p>是否保存：{{switchVal}}</p>
        </div>
      </xm-cell-group>
      
    </div>


    <h4>网格</h4>



    <h4>导航栏(顶部)</h4>




    <h4>标签栏(底部)</h4>




    <h4>tab切换</h4>




    <h2>弹出层</h2>
    <h4>Modal</h4>
    <xm-button type="success" @click="modalClick1">alert</xm-button>
    <xm-button type="primary" @click="modalClick2">confirm</xm-button>
    <xm-button type="error" @click="modalClick3">特殊应用层</xm-button>
    <xm-button type="success" @click="modalClick4">全局alert层</xm-button>
    <xm-button type="primary" @click="modalClick5">全局confirm层,带回调函数</xm-button>

    <xm-modal type="alert" :visible="modalVisible1" @close="modalClose1" @confirm="modalOk1" dialog-title="提示" color="#19be6b" :z-index="zIndex" :mask-closable="false">点击背景功能关闭</xm-modal>
    <xm-modal type="confirm" :visible="modalVisible2" @close="modalClose2" @confirm="modalOk2" color="#19be6b" :z-index="zIndex">我哦哦哦哦哦</xm-modal>
    <xm-sp-modal :visible="modalVisible3" @close="modalClose3" :z-index="zIndex"><img src="../assets/3333.png"/></xm-sp-modal>


    <h4>Toast</h4>
    <xm-button type="success" @click="toastClick1">文字</xm-button>
    <xm-button type="primary" @click="toastClick2">loading</xm-button>
  

    <h4>Loading</h4>
    <xm-loading></xm-loading>
    <!-- 自定义定位右上角 -->
    <xm-loading class="right-top-loading" width="20" height="20" color="#ed3f14"></xm-loading>
    <xm-loading has-text>自定义文字</xm-loading>
    <!-- 测试开启 -->
    <!-- <xm-loading has-text fullScreen>全屏的loading</xm-loading> -->
    <xm-loading has-text vertical border-width="8">垂直的loading</xm-loading>
    
    
    <h2>应用组件</h2>

    <h4>工单流程</h4>
    <xm-step :step="step" :step-list="stepList"></xm-step>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: `xmui - 基于vue2.x，可复用UI组件`,
      value: '',
      value1: '',
      inputValue: '',
      modalVisible1: false,
      modalVisible2: false,
      modalVisible3: false,
      zIndex: 3000,
      stepList: ['发起工单', '主管审批', '经理审批', '总监核查', '结束'],
      step: 2,
      tag1: true,
      switch: true,
      selectList: [
                    { name: '请选择出行方式', value: 0 },
                    { name: '巴士', value: 1 },
                    { name: '快车', value: 2 },
                    { name: '专车', value: 3 },
                    { name: '顺风车', value: 4 },
                    { name: '出租车', value: 5 },
                    { name: '代驾', value: 6 }
      ],
      inputVal: '',
      textareaVal: '',
      selectVal: '',
      switchVal: 'true'
    }
  },
  methods: {
    switchAction (val) {
      this.switchVal = val
    },
    inputAction2 () {

    },
    inputAction1 (val) {
      this.inputVal = val
    },
    selectAction (val) {
      this.selectVal = val
    },
    textareaAction (val) {
      this.textareaVal = val
    },
    toastClick1 () {
      this.$toast.text({content: '太长会换行呢，15个字以内最好', direction: 'bottom'})
    },
    toastClick2 () {
      this.$toast.loading({
        mask: false
      })
    },
    modalClick4 () {
      this.$modal.alert({
        title: '这里可以自定义',
        content: '开启3秒关闭，取消背景层关闭',
        color: '#19be6b',
        autoClose: true,
        maskClosable: false
      })
    },
    modalClick5 () {
      this.$modal.confirm({
        title: '提示',
        content: '你想怎么样呢？',
        color: '#19be6b',
        callBack () {
          this.$modal.alert({
            title: '这里可以自定义',
            content: '开启3秒关闭，取消背景层关闭',
            color: '#19be6b',
            autoClose: true,
            maskClosable: false
          })
        }
      })
    },
    btnClick () {

    },
    closeTag () {
      this.tag1 = false
    },
    loadMore () {
      alert(`loadMore`)
    },
    searchAction (e) {
      this.value = e
      alert(this.value)
    },
    inputAction (e) {
      this.inputValue = e
    },
    modalClick1 (e) {
      // alert(this.modalVisible)
      this.modalVisible1 = true
      this.zIndex++
    },
    modalClick2 (e) {
      // alert(this.modalVisible)
      this.modalVisible2 = true
      this.zIndex++
    },
    modalClick3 (e) {
      // alert(this.modalVisible)
      this.modalVisible3 = true
      this.zIndex++
    },
    modalClose1 (e) {
      this.modalVisible1 = false
      // alert(this.modalVisible)
    },
    modalClose2 (e) {
      this.modalVisible2 = false
      // alert(this.modalVisible)
    },
    modalClose3 (e) {
      this.modalVisible3 = false
      // alert(this.modalVisible)
    },
    modalOk1 (e) {
      // alert(`好的1`)
      this.modalVisible1 = false
      // alert(this.modalVisible)
    },
    modalOk2 (e) {
      alert(`好的2`)
      this.modalVisible2 = false
      // alert(this.modalVisible)
    }
  },
  mounted: () => {
    // alert(this.modalVisible)

  }
}
</script>

<style scoped lang="scss">
#demo-wrap{
  margin: 10px auto;
}
.wrap{
  margin: 10px;
}
h1,h3{
  margin: 0;
}
h3{
  font-weight: normal;
  font-size: 16px;
}
h4{
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  background-color: #e9e9e9;
  padding: 10px;
}
h2{
  text-align: left;
  width: 100%;
  border-bottom: 1px dashed #ededed;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
  margin-top: 30px;
  margin-bottom: 0;
}
.btn__group{
  border: 1px solid #eee;
  padding: 10px;
  position: relative;
  margin: 0 20px;
}
.btn__group::before{
  content: '按钮组';
  font-size:12px;
  position: absolute;
  top: -6px;
  right: -20px;
  background: #fff;
  color: #aaa;
}
.btn__block{
  margin: 0 auto!important;
}
.xm__btn,.xm__tag{
  margin-bottom: 10px;
}
.xm__dialog--special .xm__dialog--bd img{
  width: 100%;
  border-radius: 4px;
}
.xm__loading--wrap{
  margin: 15px auto;
}
.right-top-loading{
  position: fixed;
  right: 5px;
  top: 5px;
}
.right-top-loading.xm__loading--wrap{
  margin: 0;
}
.form-demo{
  width: 98%;
  margin: 0 auto;
  background: #f5f5f5;
  padding: 1%;
}
</style>

