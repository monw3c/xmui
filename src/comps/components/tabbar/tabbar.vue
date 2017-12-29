<template>
    <div class="xm__tabbar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'xm-tabbar',
  props: {
    // active: {
    //   type: String,
    //   default: ''
    // },
    color: {
      type: String,
      default: ''
    }
  },
  methods: {
    actived () {
      // console.log(this.$children.length)
    }
  },
  watch: {
    // active (val) {

    // }
  }
}
</script>

<style scoped lang="scss">

</style>
