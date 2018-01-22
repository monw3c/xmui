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
    const defaultOpts = {title: '', content: '', type: 'confirm', maskClosable: true, color: '', callBack () { }}
    const propsOpts = Object.assign(defaultOpts, opts)
    return open(propsOpts)
  },

  prompt (opts) {
    const defaultOpts = {title: '', placeholder: '', type: 'prompt', maskClosable: true, color: '', readonly: false, callBack () { }}
    const propsOpts = Object.assign(defaultOpts, opts)
    return open(propsOpts)
  },

  alert (opts) {
    const defaultOpts = {title: '', content: '', type: 'alert', maskClosable: true, color: '', autoClose: false, callBack () { }}
    const propsOpts = Object.assign(defaultOpts, opts)
    return open(propsOpts)
  }
}
