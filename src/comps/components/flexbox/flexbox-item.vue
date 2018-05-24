<template>
    <div class="xm__flex--item" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'xm-flexbox-item',
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
