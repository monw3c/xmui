<template>
  <transition name="fade">
    <div class="xm__actionsheet--wrap" ref="actionsheet">
      <div class="xm__mask" v-show="isShow" :class="isShow?'xm__actionsheet--active':''" @click.stop="close"></div>
      <div class="xm__actionsheet" :class="isShow?'xm__actionsheet--active':''">
        <header class="xm__actionsheet--header" v-if="header">{{header}}</header>
        <ul>
        <li v-for="(item,index) in itemList" :key="index" @click.stop="itemClick(item)" class="xm__actionsheet--item">{{item.text}}</li>
        </ul>
        <a v-if="cancel" @click.stop="close" class="xm__actionsheet--action" :style="{'color':cancelColor}">{{cancel}}</a>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'xm-actionsheet',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    itemList: {
      type: Array,
      required: true,
      default: () => {}
    },
    header: {
      type: String,
      default: ''
    },
    cancel: {
      type: String,
      default: ''
    },
    cancelColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: this.value
    }
  },
  methods: {
    active () {
      this.isShow = true
      this.$emit('input', true)
    },
    close () {
      this.isShow = false
      this.$emit('input', false)
    },
    itemClick (item) {
      this.close()
      if (typeof item.callBack === 'function') {
        item.callBack()
      }
    }
  },
  watch: {
    value (val) {
      this.isShow = val
      if (val) {
        document.body.classList.add('xm--overflow--hidden')
      } else {
        document.body.classList.remove('xm--overflow--hidden')
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.isShow) {
        this.active()
      }
    })
  },
  destroy () {
    this.close()
  }
}
</script>

<style scoped lang="scss">

</style>
