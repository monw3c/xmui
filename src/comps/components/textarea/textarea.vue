<template>
    <div class="xm__textarea">
        <textarea :placeholder="placeholder" v-model="strVal" :maxlength="max" :readonly="readonly" :disabled="disabled"></textarea>
    </div>
</template>

<script>

export default {
  name: 'xm-textarea',
  props: {
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    value: {
      type: String
    },
    max: {
      validator (val) {
        if (!val) return true
        return /^(([1-9]\d*)|0)$/.test(val)
      }
    }
  },
  data () {
    return {
      strVal: ''
    }
  },
  watch: {
    value (val) {
      this.strVal = val
    },
    strVal (val) {
      this.$emit('input', val)
    }
  },
  mounted () {
    this.$nextTick(() => {
      const v = this.value
      if (!v) return
      this.strVal = v.length > this.max ? v.substr(v, this.max) : v
    })
  }
}
</script>

<style scoped lang="scss">

</style>
