import './styles/index.scss'

import {Button, ButtonGroup} from './components/button/index'
import Tag from './components/tag/index'
import LoadMore from './components/loadMore/index'
import Search from './components/search/index'
import Loading from './components/loading/index'
import Step from './components/step/index'
import Input from './components/input/index'
import Textarea from './components/textarea/index'
import Select from './components/select/index'
import Switch from './components/switch/index'
import Skeleton from './components/skeleton/index'

import { Radio, RadioGroup } from './components/radio/index'
import { Checkbox, CheckboxGroup } from './components/checkbox/index'
import { Grid, Grids } from './components/grid/index'
import { Modal, SpModal } from './components/modal/index'
import { CellItem, CellGroup } from './components/cell/index'

import GlobalModal from './components/globalmodal/index'
import Toast from './components/toast/index'

const components = [
  Button,
  ButtonGroup,
  Tag,
  LoadMore,
  Search,
  Modal,
  SpModal,
  Loading,
  Step,
  Input,
  Textarea,
  Select,
  Switch,
  Skeleton,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Grid,
  Grids,
  CellItem,
  CellGroup
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))

  Vue.prototype.$modal = GlobalModal
  Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
