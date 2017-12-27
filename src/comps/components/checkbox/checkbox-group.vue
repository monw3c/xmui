<template>
    <div class="xm__checkbox--group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'xm-checkbox-group',
  props: {
    value: {
      type: Array,
      default: []
    },
    color: {
      type: String,
      default: '#4CD864'
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      this.updateValue()
    }
  },
  methods: {
    updateValue () {
      const value = this.value
      this.childrens = this.$children.filter(item => item.$options.name === 'xm-checkbox')
      if (this.childrens) {
        this.childrens.forEach(child => {
          child.checkedModels = value
        })
      }
    },
    change (val) {
      this.currentValue = val
      this.updateValue()
      this.$emit('input', val)
    }
  },
  mounted () {
    this.$nextTick(this.updateValue)
  }
}
</script>

<style scoped lang="scss">

</style>
