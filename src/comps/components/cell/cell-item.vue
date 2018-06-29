<template>
    <div class="xm__cell--item" @click="handleClick">
        <div class="xm__cell--left">
              <slot name="leftIcon"></slot>
              <slot name="left"></slot>
        </div>

        <a v-if="type=='link'" :href="href" class="xm__cell--right">
              <slot name="right"></slot>
              <slot name="rightIcon"></slot>
        </a>

        <div v-else class="xm__cell--right">
              <slot name="right"></slot>
              <slot name="rightIcon"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'xm-cell-item',
  props: {
    type: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
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
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
