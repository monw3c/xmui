<template>
    <div class="xm__search" :style="{'background-color':bgColor}">
      <div class="xm__search--input--wrap">
        <i class="xm__icon xm__icon--search"></i>
        <input type="search" class="xm__search--input"
        :placeholder="placeholder" 
        :value="value" 
        >
        <i class="xm__icon xm__icon--clear" style="display: none;"></i>
      </div>
      <div class="xm__search--action">
        <div class="xm__search--action--text" :style="{'color':actionTextColor}" @click="searchAction">
          <slot>取消</slot>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'XMSearch',
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
    icon: {
      type: String,
      default: ''
    },
    actionTextColor: {
      type: String,
      default: ''
    },
    block: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean
  },
  methods: {
    searchAction (event) {
      this.$emit('action', event)// 传播方法名为click，你也可以自定义其他名字
    }
  },
  computed: {
    iconClass () {
      if (this.icon !== '') return 'xm__hasIconBtn'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
