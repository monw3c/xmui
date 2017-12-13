import Vue from 'vue'
import globalModal from './global-modal.vue'

function open (propsData) {
  const ModalComponent = Vue.extend(globalModal)
  return new ModalComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  confirm (opts) {
    const defaultOpts = {content: '', type: 'confirm', maskClosable: true, callBack () { }}
    const propsOpts = Object.assign(defaultOpts, opts)
    return open(propsOpts)
  },

  alert (opts) {
    const defaultOpts = {content: '', type: 'alert', maskClosable: true, autoClose: false, callBack () { }}
    const propsOpts = Object.assign(defaultOpts, opts)
    return open(propsOpts)
  }
}
