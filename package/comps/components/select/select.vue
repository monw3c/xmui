<template>
    <div class="xm__select">
        <select :class="[{'is-right': right}]" v-model="selectVal">
          <option v-for="item in data" :value="item.value">{{item.name}}</option>
        </select>
    </div>
</template>

<script>

export default {
  name: 'xm-select',
  props: {
    data: [Array],
    right: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectVal: 0
    }
  },
  watch: {
    selectVal (val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
