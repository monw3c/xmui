# Loading 加载组件
----
### 基础用法
使用```width```、```height```、```color```、```fullScreen```、```border-width```、```vertical```、```closable```和```has-text```属性来定义 Loading 的样式。
``` html
<xm-loading></xm-loading>
<!-- 自定义定位右上角 -->
<xm-loading class="right-top-loading" width="20" height="20" color="#ed3f14"></xm-loading>
<xm-loading has-text>自定义文字</xm-loading>
<!-- 测试开启 -->
<xm-loading has-text fullScreen>全屏的loading</xm-loading>
<xm-loading has-text vertical>垂直的loading</xm-loading>
<xm-loading has-text fullScreen closable @close="loadingStatus=false" v-show="loadingStatus">可关闭的loading</xm-loading>
<xm-loading><div slot="cus"><img style="width:40px" src="https://raw.githubusercontent.com/monw3c/xmui/master/static/logo.jpg"><p style="color:#19be6b;margin:0;">自定义效果</p></div></xm-loading>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| width     | 设置大小   | String  |    — | -   |
| height    | 设置大小   | String  |    — | -   |
| color     | 颜色   | string    |  自定义 |     —    |
| has-text     | 是否有文字   | Boolean  |    — | false   |
| fullScreen     | 是否为全局效果   | Boolean  |    — | false   |
| vertical     | 垂直排列icon和文字   | Boolean  |    — | false   |
| closable     | 当fullScreen时才出现可关闭按钮   | Boolean  |  —  |   —   |
| slot="cus"   | 可自定义传入内容   | —   |  —  |   —   |

### 方法
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| close     | 关闭操作   |  Function    |  自定义  |     —    |

