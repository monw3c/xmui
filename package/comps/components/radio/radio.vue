<template>
    <label class="xm__radio" :class="[{'disabled':disabled,'horizontal':$parent.hor}]">
      <!-- 水平显示 -->
      <template v-if="$parent.hor">
        <input type="radio" @change="onChange" :disabled="disabled" :checked="checked"/>
        <span class=" xm__icon--radio-horizontal" :style="[{'color': $parent.color}]"></span>
        <span class="xm__radio--text-horizontal"><slot>{{value}}</slot></span>
      </template>
      <!-- 垂直显示 -->
      <template v-else>
        <span class="xm__radio--text"><slot>{{value}}</slot></span>
        <input type="radio" @change="onChange" :disabled="disabled" :checked="checked"/>
        <span class="xm__radio--icon xm__icon--radio" :style="[{'color': $parent.color}]"></span>
      </template>
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
