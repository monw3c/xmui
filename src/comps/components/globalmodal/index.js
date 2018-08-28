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
    const defaultOpts = {title: '', content: '', type: 'confirm', maskClosable: true, color: '', confirmText: '确定', cancelText: '取消', callBack () { }}
    const propsOpts = Object.assign(defaultOpts, opts)
    return open(propsOpts)
  },

  prompt (opts) {
    const defaultOpts = {title: '', placeholder: '', type: 'prompt', maskClosable: true, color: '', confirmText: '确定', cancelText: '取消', readonly: false, callBack () { }}
    const propsOpts = Object.assign(defaultOpts, opts)
    return open(propsOpts)
  },

  alert (opts) {
    const defaultOpts = {title: '', content: '', type: 'alert', maskClosable: true, color: '', confirmText: '确定', autoClose: false, callBack () { }}
    const propsOpts = Object.assign(defaultOpts, opts)
    return open(propsOpts)
  }
}
