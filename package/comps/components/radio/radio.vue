<template>
    <label class="xm__radio" :class="[{'disabled':disabled}]">
        <span class="xm__radio--text"><slot>{{value}}</slot></span>
        <input type="radio" @change="onChange" :disabled="disabled" :checked="checked"/>
        <span class="xm__radio--icon xm__icon--radio" :style="[{'color': $parent.color}]"></span>
    </label>
</template>

<script>
export default {
  name: 'xm-radio',
  props: {
    value: [String, Number],
    disabled: Boolean
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    onChange (event) {
      if (this.disabled) return
      this.checked = event.target.checked
      this.$parent.change(this.value)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
