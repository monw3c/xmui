<template>
  <transition name="fade">
    <div class="xm__popup--wrap" ref="popup">
      <div class="xm__mask" v-show="isShow" :class="isShow?'xm__popup--active':''" @click.stop="close"></div>
      <div class="xm__popup" :class="isShow?'xm__popup--active':''">
        <header class="xm__popup--header" v-if="header">{{header}} <a v-if="cancel" @click.stop="close" class="xm__popup--action" :style="{'color':cancelColor}">{{cancel}}</a></header>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'xm-popup',
  props: {
    value: {
      type: Boolean,
      default: false
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
