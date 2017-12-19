<template>
    <div class="xm__cell--item">
        <div class="xm__cell--left">
              <span class="xm__cell--icon"><slot name="leftIcon"></slot></span>
              <slot name="left"></slot>
        </div>
        <div class="xm__cell--right">
              <slot name="right"></slot>
              <span class="xm__cell--icon"><slot name="rightIcon"></slot></span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'xm-cell-item',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    bgColor: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    round: Boolean,
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass () {
      if (this.icon !== '') return this.icon
    }
  }
}
</script>

<style scoped lang="scss">

</style>
