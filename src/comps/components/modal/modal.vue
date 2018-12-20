<template>
  <transition name="fade">
    <div class="xm__dialog--wrap" v-if="isVisible" ref="modal" >
      <div class="xm__mask" @click="maskClose"></div>
      <div class="xm__dialog" :style="{'z-index':zIndex}">
        <div class="xm__dialog--hd" v-if="dialogTitle">
          <strong class="xm__dialog--title">{{dialogTitle}}</strong>
        </div>
        <div class="xm__dialog--bd">
          <slot></slot>
        </div>
        <div class="xm__dialog--ft">
          <div v-if="type&&type=='alert'">
            <xm-button type="primary" @click="confirm" :style="{'color':color}" long>{{confirmText}}</xm-button>
          </div>
          <div v-else-if="type&&type=='confirm'">
          <xm-button-group class="xm__btn--group" >
            <xm-button v-if="cancelBtn" @click="close">{{cancelText}}</xm-button>
            <xm-button type="primary" v-if="confirmBtn" @click="confirm" :style="{'color':color}">{{confirmText}}</xm-button>
          </xm-button-group>
          </div>
          <div v-else>
            <xm-button type="primary" @click="confirm" :style="{'color':color}" long>{{confirmText}}</xm-button>
          </div>
        </div>
      </div>
      
    </div>
  </transition>
</template>

<script>
import xmButton from '../button'
import xmButtonGroup from '../buttongroup'
export default {
  name: 'xm-modal',
  components: {
    xmButton,
    xmButtonGroup
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
    dialogTitle: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: ''
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    color: {
      type: String,
      default: ''
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    confirmBtn: {
      type: Boolean,
      default: true
    },
    cancelBtn: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    active () {
      this.isVisible = true
    },
    close () {
      this.$emit('close')
      this.isVisible = false
    },
    confirm () {
      this.$emit('confirm')
    },
    maskClose () {
      if (this.maskClosable) {
        this.close()
      // } else {
      //   this.isVisible = false
      }
    }
  },
  watch: {
    visible (val) {
      console.log(val)
      this.isVisible = val
      if (val) {
        document.body.classList.add('xm--overflow--hidden')
      } else {
        document.body.classList.remove('xm--overflow--hidden')
      }
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

<style scoped lang="scss">

</style>
