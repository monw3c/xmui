<template>
    <label class="xm__checkbox" :class="[{'disabled':disabled}]">
        <span class="xm__checkbox--text"><slot>{{value}}</slot></span>
        <input type="checkbox" :value="value" @change="onChange" :disabled="disabled" v-model="checkedModels"/>
        <span class="xm__checkbox--icon xm__icon--checked" :style="[{color: $parent.color}]"></span>
    </label>
</template>

<script>
export default {
  name: 'xm-checkbox',
  props: {
    value: [String, Number],
    disabled: Boolean
  },
  data () {
    return {
      // checked: false,
      checkedModels: []
    }
  },
  methods: {
    onChange (event) {
      if (this.disabled) return
      setTimeout(() => {
        this.$parent.change(this.checkedModels)
      }, 0)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
