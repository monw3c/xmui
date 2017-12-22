<template>
    <div class="xm__grids" :class="'xm__grids--'+row">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'xm-grids',
  props: {
    row: {
      type: String,
      default: '4'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
