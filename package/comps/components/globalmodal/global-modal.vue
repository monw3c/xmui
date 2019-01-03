<template>
  <transition name="fade">
    <div class="xm__dialog--wrap" v-show="isVisible" ref="modal" >
      <div class="xm__mask" @click="maskClose"></div>
      <div class="xm__dialog">
        <div class="xm__dialog--hd">
          <strong class="xm__dialog--title" v-if="title">{{title}}</strong>
        </div>
        <div class="xm__dialog--bd" v-if="type=='prompt'">
          <xm-input v-model="promptValue" :placeholder="placeholder" :readonly="readonly" class="xm__dialog--bd-input"></xm-input>
        </div>
        <div class="xm__dialog--bd" v-else>
          {{content}}
        </div>
        <div class="xm__dialog--ft">
          <div v-if="!type||type=='alert'">
            <xm-button type="primary" @click="confirm" :style="{'color':color}" long>{{confirmText}}</xm-button>
          </div>
          <div v-else-if="type=='confirm'">
          <xm-button-group class="xm__btn--group" >
            <xm-button @click="close">{{cancelText}}</xm-button>
            <xm-button type="primary" @click="confirm" :style="{'color':color}">{{confirmText}}</xm-button>
          </xm-button-group>
          </div>
          <div v-else-if="type=='prompt'">
          <xm-button-group class="xm__btn--group" >
            <xm-button @click="close">{{cancelText}}</xm-button>
            <xm-button type="primary" @click="confirm" :style="{'color':color}">{{confirmText}}</xm-button>
          </xm-button-group>
          </div>
          
        </div>
      </div>
      
    </div>
  </transition>
</template>

<script>
import xmButton from '../button'
import xmButtonGroup from '../buttongroup'
import ModalMixin from './ModalMixin'
export default {
  mixins: [ModalMixin],
  components: {
    xmButton,
    xmButtonGroup
  },
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    value: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    readonly: Boolean,
    maskClosable: {
      type: Boolean,
      default: true
    },
    content: String,
    autoClose: {
      type: Boolean,
      default: false
    },
    callBack: {
      type: Function,
      default () {}
    },
    closeAction: {
      type: Function,
      default () {}
    }
  },
  data () {
    return {
      promptValue: this.value
    }
  },
  methods: {
    close () {
      this.$emit('close')
      this.isVisible = false
      this.closeAction()
      this.destroyed()
    },
    confirm () {
      this.$emit('confirm')
      this.isVisible = false
      if (this.type === 'prompt') {
        if (this.promptValue !== '') {
          this.callBack(this.promptValue)
        }
      } else {
        this.callBack()
      }
      this.destroyed()
    },
    maskClose () {
      if (this.maskClosable) {
        this.close()
      }
    },
    destroyed () {
      setTimeout(() => {
        this.$destroy()
      }, 200)
    }
  },
  mounted () {
    setTimeout(() => {
      this.isVisible = true
    }, 100)

    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, 3000)
    }
  }
}
</script>