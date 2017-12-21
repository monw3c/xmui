<template>
    <div :class="[['xm__skeleton--']+type, ['xm__skeleton--']+animate]" :style="{'width':width,'height':height}"></div>
</template>

<script>

export default {
  name: 'xm-skeleton',
  props: {
    type: {
      type: String,
      default: 'bar'
    },
    animate: {
      type: String,
      default: 'opacity'
    },
    width: [ String ],
    height: [ String ]
  },
  computed: {
    animateClass () {
      if (this.animate !== '') return 'xm__skeleton--' + this.animate
    }
  }
}
</script>

<style scoped lang="scss">

</style>
