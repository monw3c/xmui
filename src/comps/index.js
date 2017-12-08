import './styles/index.scss'
import {Button, ButtonGroup} from './components/button/index'
import Tag from './components/tag/index'
import LoadMore from './components/loadMore/index'
import Search from './components/search/index'
import {Modal, SpModal} from './components/modal/index'

const components = [
  Button,
  ButtonGroup,
  Tag,
  LoadMore,
  Search,
  Modal,
  SpModal
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))

  Vue.prototype.$Modal = Modal
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
