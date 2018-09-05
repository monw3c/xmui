<template>
    <div class="xm__search flex" :style="{'background-color':bgColor}">
      <div class="xm__search--input--wrap">
        <i class="xm__icon xm__icon--search"></i>
        <input type="search" class="xm__search--input" 
        :placeholder="placeholder" 
        :value="value" 
        @input="onInput" 
        @keypress.enter.prevent="onSearch" 
        @focus="onFocus"
        @blur="onBlur"
        ref="input"
        >
        <i v-if="hasClear" v-show="val" class="xm__icon xm__icon--clear xm__icon--close-outline" @click="onClear"></i>
      </div>
      <div class="xm__search--action" v-show="val" v-if="this.$slots.search && this.$slots.search.length>0">
        <div class="xm__search--action--text" :style="{'color':actionTextColor}" @click="onSearch">
          <slot name="search"></slot>
        </div>
      </div>
      <div class="xm__search--cancel" v-if="this.$slots.cancel && this.$slots.cancel.length>0" v-show="val">
        <div class="xm__search--cancel--text" :style="{'color':cancelTextColor}" @click="onCancel">
          <slot name="cancel"></slot>
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
    cancelTextColor: {
      type: String,
      default: ''
    },
    showAction: {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    hasClear: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isFocus: false,
      val: ''
    }
  },
  watch: {
    value (val) {
      this.val = val
    }
  },
  methods: {
    onSearch (event) {
      event.preventDefault()
      if (this.val === '') { return }
      this.$emit('action', this.val)
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
    },
    onCancel () {
      this.$emit('cancel', this.val)
    },
    onClear () {
      // this.$refs.input.value = ''
      this.val = ''
      this.isFocus = false
      this.$emit('clear', this.val)
    }
  }

}
</script>

<style scoped lang="scss">

</style>
