<template>
    <div class="xm__flexbox" :class="directionClass">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'xm-flexbox',
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  computed: {
    directionClass () {
      return this.direction === 'vertical' ? 'xm__flex--vertical' : ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
