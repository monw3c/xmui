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
        <i class="xm__icon--close xm__tag--close" v-if="closable"></i>
    </div>
</template>

<script>

export default {
  name: 'xm-tag',
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
    closable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
