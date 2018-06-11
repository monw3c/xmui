<template>
  <transition name="fade">
    <div class="xm__dialog--wrap" v-if="isVisible" ref="modal" >
      <div class="xm__mask" @click="maskClose"></div>
      <div class="xm__dialog" :style="{'z-index':zIndex}">
          <strong class="xm__dialog--title" v-if="dialogTitle">{{dialogTitle}}</strong>
        </div>
        <div class="xm__dialog--bd">
          <slot></slot>
        </div>
        <div class="xm__dialog--ft">
          <div v-if="type&&type=='alert'">
            <xm-button @click="confirm" :style="{'color':color}"  long>确定</xm-button>
          </div>
          <div v-else-if="type&&type=='confirm'">
          <xm-button-group class="xm__btn--group" >
            <xm-button @click="close">取消</xm-button>
            <xm-button @click="confirm" :style="{'color':color}">确定</xm-button>
          </xm-button-group>
          </div>
          <div v-else>
            <xm-button @click="confirm" :style="{'color':color}"  long>确定</xm-button>
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
    color: {
      type: String,
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
    confirm () {
      this.$emit('confirm')
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

</style>
