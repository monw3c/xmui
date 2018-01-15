/* special modal特殊的弹出层，可用于活动专题 */
<template>
  <transition name="fade">
    <div class="xm__dialog--wrap" v-if="isVisible" ref="modal" >
      <div class="xm__mask" @click="maskClose"></div>
      <div class="xm__dialog xm__dialog--special" :style="{'z-index':zIndex}">
        <div class="xm__dialog--bd">
          <slot></slot>
        </div>
        <div class="xm__dialog--ft">
          <div>
            <xm-button @click="close"><i class="xm__icon--close-outline"></i></xm-button>
          </div>
        </div>
      </div>
      
    </div>
  </transition>
</template>

<script>
export default {
  name: 'xm-sp-modal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: ''
    },
    maskClosable: {
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
    },
    maskClose () {
      if (this.maskClosable) {
        this.close()
      }
    }
  },
  watch: {
    visible (val) {
      this.isVisible = val
      // if (!val && this.isLoading) {
      //   this.isLoading = false
      // }
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
.xm__dialog.xm__dialog--special{
  position: fixed;
  text-align: center;
  top: 50%;
  left: 50%;
  width: 85%;
  max-width: 300px;
  font-size: 16px;
  overflow: hidden;
  transition: .2s;
  border-radius: 4px;
  background-color: transparent;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1000;

  & .xm__dialog--bd{
    max-height: 320px;
    overflow: hidden;
  
    & .xm__dialog--bd img{
      width: 100%;
      border-radius: 4px;
    }
  }

  & .xm__dialog--ft {
    margin-bottom: 0;
    
    & button {
    background: transparent;
    margin: 0 auto;

      &::before{
        border: none;
      }

      &:hover,
      &:active {
        background-color: transparent;
        text-decoration: none;
        border: none;
      }

      & .xm__icon--close-outline{
        font-size: 34px;
        color: #fff;
      }
    }
  }
}
</style>
