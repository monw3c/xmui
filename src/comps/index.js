/* eslint-disable */
import Button from './components/button/index';

const components = [
    Button
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
    install,
    ...components
};

export default API