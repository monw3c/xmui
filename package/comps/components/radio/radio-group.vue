<template>
    <div class="xm__radio--group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'xm-radio-group',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    color: {
      type: String,
      default: '#4CD864'
    },
    hor: {
      type: Boolean,
      default: false
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
      this.childrens = this.$children.filter(item => item.$options.name === 'xm-radio')
      if (this.childrens) {
        this.childrens.forEach(child => {
          child.checked = value === child.value
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
