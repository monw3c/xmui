# Tabbar 标签栏
----
### 基础用法
使用```icon```、```type```、```href```、```bagde```、```img-src```和```active```属性来定义 Tabbar 的样式。
``` html
<xm-tabbar>
    <xm-tabbar-item icon="xm__icon--phone" type="link" href="https://github.com/monw3c/xmui" active>首页</xm-tabbar-item>
    <xm-tabbar-item icon="xm__icon--lock" :href="hrefObj" bagde="8" @click="routerAction">商城</xm-tabbar-item>
    <xm-tabbar-item icon="xm__icon--add" href="add" class="add"></xm-tabbar-item>
    <xm-tabbar-item href="###" img-src="https://github.com/monw3c/xmui/blob/master/static/logo.jpg?raw=true">自定义图标</xm-tabbar-item>
    <xm-tabbar-item icon="xm__icon--date" href="my">我的</xm-tabbar-item>
</xm-tabbar>

export default {
  data () {
    return {
      hrefObj: { path: '/mall', name: 'mall', params: { userId: 123 } }
    }
  }
}
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 设置类型   | String  |  link为单纯a链接，router基于vue-router的链接 | router  |
| href     | 设置链接   | String,Object  |  — | —   |
| icon    | 设置图标(样式)   | String  |  — |  —   |
| img-src    | 自定义图标地址   | String  |  — |  —   |
| bagde    | 设置角标   | String  |  — |  —   |
| active    | 设置选中状态   | Boolean  |  — |  false   |
| img-src    | img-src图标   | String  |  — |  —   |

### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- | 
| click     | 点击方法   | Function  |    — | —   |