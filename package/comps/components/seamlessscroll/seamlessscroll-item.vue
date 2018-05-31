<template>
    <div class="xm__seamlessscroll--item" @click="itemAciton"><slot></slot></div>
</template>

<script>
    export default {
      name: 'xm-seamlessscroll-item',
      mounted () {
        // this.$parent.init()
      },
      methods: {
        itemAciton (event) {
          this.$emit('click', event)
        }
      }
    }
</script>
