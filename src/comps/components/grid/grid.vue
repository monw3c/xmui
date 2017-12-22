<template>
    <a :href="computeHref" @click="gridAciton" class="xm__grid">
        <div class="xm__grid--icon"><slot name='icon'></slot></div>
        <div class="xm__grid--text"><slot name='text'></slot></div>
    </a>
</template>

<script>

export default {
  name: 'xm-grid',
  props: {
    href: [ String ]
  },
  methods: {
    gridAciton () {
      this.$emit('click')
    }
  },
  computed: {
    computeHref () {
      return this.href && this.href !== '' ? this.href : 'javascript:;'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
