import Vue from 'vue'
import Toast from './toast.vue'

function open (propsData) {
  const ToastComponent = Vue.extend(Toast)
  return new ToastComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  text (opts) {
    const defaultOpts = {content: '', mask: false, direction: '', callBack () { }}
    const propsOpts = Object.assign(defaultOpts, opts)
    return open(propsOpts)
  },

  loading (opts) {
    const defaultOpts = {content: '', type: 'default', mask: true, callBack () { }}
    const propsOpts = Object.assign(defaultOpts, opts)
    return open(propsOpts)
  }
}
