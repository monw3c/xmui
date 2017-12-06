<template>
    <div class="xm__search" :style="{'background-color':bgColor}">
      <div class="xm__search--input--wrap">
        <i class="xm__icon xm__icon--search"></i>
        <input type="search" class="xm__search--input" 
        :placeholder="placeholder" 
        :value="value" 
        @input="onInput" 
        @keypress.enter.prevent="searchAction" 
        @focus="onFocus"
        @blur="onBlur"
        >
        <i class="xm__icon xm__icon--clear" style="display: none;"></i>
      </div>
      <div class="xm__search--action" v-if="showAction">
        <div class="xm__search--action--text" :style="{'color':actionTextColor}" @click="searchAction">
          <slot>搜索</slot>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'xm-search',
  props: {
    placeholder: {
      type: String,
      default: '请输入搜索关键字'
    },
    value: {
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
    actionTextColor: {
      type: String,
      default: ''
    },
    showAction: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isFocus: false
    }
  },
  methods: {
    searchAction (event) {
      event.preventDefault()
      this.$emit('action', this.value)
      return false
    },
    onInput (event) {
      this.$emit('input', event.target.value)
    },
    onFocus () {
      this.isFocus = true
      this.$emit('focus')
    },
    onBlur () {
      this.isFocus = false
      this.$emit('blur')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
