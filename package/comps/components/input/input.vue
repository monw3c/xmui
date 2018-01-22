<template>
    <div class="xm__input">
        <input ref="input" v-if="type == 'text'" type="text"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'search'" type="search"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'password'" type="password"
                       v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'number'" type="number"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'email'" type="email"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'tel'" type="tel" pattern="[0-9]*"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" maxlength="11" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'datetime-local'" type="datetime-local"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'date'" type="date"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'time'" type="time"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
    </div>
</template>

<script>
// input属性还需要不断完善 2017/12/20
export default {
  name: 'xm-input',
  props: {
    name: String,
    placeholder: String,
    value: [String, Number],
    readonly: Boolean,
    disabled: Boolean,
    autocomplete: {
      type: String,
      default: 'off'
    },
    type: {
      type: String,
      default: 'text'
    },
    max: {
      validator (val) {
        return /^\d*$/.test(val)
      }
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    onBlur (event) {
      this.$emit('blur', event.target.value)
    },
    onFocus () {
      this.$emit('focus')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
