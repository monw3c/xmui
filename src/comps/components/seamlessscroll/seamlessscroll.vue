<template>
    <div class="xm__seamlessscroll" :style="{height: height + 'px'}">
        <div class="xm__seamlessscroll--box" :style="styles" :class="'xm__seamlessscroll--align-' + align">
            <div class="xm__seamlessscroll--item" v-html="lastItem" v-if="this.totalNum > 1"></div>
            <slot></slot>
            <div class="xm__seamlessscroll--item" v-html="firtstItem"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'xm-seamlessscroll',
  data () {
    return {
      timer: null,
      index: 1,
      totalNum: 0,
      firtstItem: '',
      lastItem: '',
      styles: {
        transform: 0,
        transitionDuration: 0
      }
    }
  },
  props: {
    height: {
      validator (val) {
        return /^\d*$/.test(val)
      },
      default: 30
    },
    speed: {
      validator (val) {
        return /^\d*$/.test(val)
      },
      default: 500
    },
    autoplay: {
      validator (val) {
        return /^\d*$/.test(val)
      },
      default: 3000
    },
    align: {
      validator (value) {
        return ['left', 'center', 'right'].indexOf(value) > -1
      },
      default: 'left'
    },
    direction: {
      validator (value) {
        return ['up', 'down'].indexOf(value) > -1
      },
      default: 'up'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.destroy()
      this.items = this.$children.filter(item => item.$options.name === 'xm-seamlessscroll-item')
      this.totalNum = this.items.length
      if (this.totalNum <= 1) return
      this.firtstItem = this.items[0].$el.innerHTML
      this.lastItem = this.items[this.totalNum - 1].$el.innerHTML
      this.setTranslate(0, -this.height)
      this.autoPlay()
    },
    autoPlay () {
      this.timer = setInterval(() => {
        if (this.direction === 'up') {
          this.setTranslate(this.speed, -(++this.index * this.height))
          if (this.index >= this.totalNum) {
            this.index = 0
            setTimeout(() => {
              this.setTranslate(0, 0)
            }, this.speed)
          }
        } else {
          this.setTranslate(this.speed, -(--this.index * this.height))
          if (this.index <= 0) {
            this.index = this.totalNum
            setTimeout(() => {
              this.setTranslate(0, -this.totalNum * this.height)
            }, this.speed)
          }
        }
      }, this.autoplay)
    },
    setTranslate (speed, translate) {
      this.styles.transitionDuration = speed + 'ms'
      this.styles.transform = 'translate3d(0, ' + translate + 'px, 0)'
    },
    destroy () {
      clearInterval(this.timer)
    }
  },
  beforeDestroy () {
    this.destroy()
  }
}
</script>

<style scoped lang="scss">

</style>