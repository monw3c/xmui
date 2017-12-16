<template>
    <div class="xm__input--wrap">
        <i class="xm__icon" :class="iconClass" v-if="icon&&icon!=''"></i>
        <input type="text" class="xm__input" 
        :placeholder="placeholder" 
        :value="value" 
        @input="onInput" 
        @keypress.enter.prevent="searchAction" 
        @focus="onFocus"
        @blur="onBlur"
        >
        <i class="xm__icon xm__icon--clear" style="display: none;"></i>
    </div>
</template>

<script>

export default {
  name: 'xm-input',
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
