<template>
    <div 
        class="xm__tag"
        :style="{backgroundColor: bgColor, color: color, 'border-color':borderColor}"
        :class="[
        'xm__tag--'+type,
        {'is-round': round}
        ]"
    >
        <span><slot></slot></span>
    </div>
</template>

<script>

export default {
  name: 'XMTag',
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
    round: Boolean
  }
}
</script>

<style scoped lang="scss">
@import './tag';
</style>
