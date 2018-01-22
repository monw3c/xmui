<template>
    <div class="xm__checkbox--group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'xm-checkbox-group',
  props: {
    value: { // 把v-model绑定的值带进来放进子类绑定的checkedModels数组中
      type: Array,
      default: function () {
        return []
      }
    },
    color: {
      type: String,
      default: '#4CD864'
    }
  },
  data () {
    return {

    }
  },
  watch: {
    value (val) {
      this.updateValue()
    }
  },
  methods: {
    updateValue () { // 更新数据
      const value = this.value
      this.childrens = this.$children.filter(item => item.$options.name === 'xm-checkbox')
      if (this.childrens) {
        this.childrens.forEach(child => {
          child.checkedModels = value // 把值放进子类绑定的checkedModels数组中
        })
      }
    },
    change (val) {
      this.$emit('input', val) // 单向流动，让值从父级传出去
    }
  },
  mounted () {
    this.$nextTick(this.updateValue)
  }
}
</script>

<style scoped lang="scss">

</style>
