<template>
    <input type="checkbox" v-model="checked" class="xm__switch" :disabled="disabled">
</template>

<script>

export default {
  name: 'xm-switch',
  props: {
    value: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checked: this.value
    }
  },
  watch: {
    checked (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.checked = val
    }
  }
}
</script>

<style scoped lang="scss">

</style>
