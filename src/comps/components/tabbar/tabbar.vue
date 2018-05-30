<template>
    <footer class="xm__tabbar">
      <slot></slot>
    </footer>
</template>

<script>
export default {
  name: 'xm-tabbar',
  props: {
    value: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
