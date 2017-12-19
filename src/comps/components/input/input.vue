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
    required: {
      type: Boolean,
      default: false
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
    min: {
      validator (val) {
        return /^\d*$/.test(val)
      }
    },
    onBlur: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value,
      isempty: !this.value,
      iserror: false,
      showPwd: false,
      showClear: false,
      showWarn: true,
      initError: false,
      valid: true,
      errorMsg: '',
      errorCode: '',
      regexObj: {
        email: '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$',
        mobile: '^(86)?1[3,4,5,7,8]\\d{9}$',
        bankcard: '^\\d{15,19}$'
      }
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
      this.emitInput()
    },
    currentValue (val) {
      this.isempty = !val
      this.validatorInput(val, true)
      this.emitInput()
    },
    required (val) {
      this.required = val
      this.validatorInput(this.currentValue, false)
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
