<template>
  <transition-group name="lazy" tag="div" class="xm__lazy">
      <div v-if="show" key="component">
        <slot></slot>
      </div>
      <div v-else-if="$slots.skeleton&&!show" key="skeleton">
        <slot name="skeleton"></slot>
      </div>
      <div v-else key="loading">
        <slot name="loading"></slot>
      </div>
  </transition-group>
</template>

<script>

export default {
  name: 'xm-lazy',
  props: {
    time: { // 延迟渲染的时间，毫秒
      type: Number,
      default: 16
    }
  },
  data () {
    return {
      show: false,
      timer: null
    }
  },
  created () {
    this.load()
  },
  methods: {
    load () {
      this.show = false
      this.timer = setTimeout(() => {
        this.show = true
        this.$emit('loaded')
      }, this.time)
    }
  },
  destroy () {
    clearTimeout(this.timer)
  }
}
</script>

<style>

</style>
