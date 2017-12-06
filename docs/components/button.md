# Button 按钮
----
### 基础用法
使用```type```、```plain```、```icon```、```loading```、```long```、```bg-color```、```color```、```border-color```、```block```和```round```属性来定义 Button 的样式。
``` html
<XMButton>普通按钮</XMButton>
<XMButton type="primary" @click="btnClick" icon="xm__icon--link" >primary按钮</XMButton>
<XMButton type="error" icon="xm__icon--link" ></XMButton>
<XMButton type="warning" disabled>禁止按钮</XMButton>
<XMButton plain>简约按钮</XMButton>
<XMButton type="text" icon="xm__icon--link">文字按钮</XMButton>
<XMButton loading type="success">loading状态按钮</XMButton>
<XMButton bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</XMButton>
<XMButton bg-color="#fcb" color="#e0439a" border-color="#fcb" block class="btn__block">块按钮</XMButton>
<XMButton round long>长按钮</XMButton>
<XMButtonGroup class="btn__group">
    <XMButton type="warning">警告按钮</XMButton>
    <XMButton type="primary" @click="btnClick" icon="xm__icon--link" >primary按钮</XMButton>
</XMButtonGroup>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| long     | 长按钮   | Boolean  |    — | false   |
| loading     | 是否有加载效果   | Boolean  |    — | false   |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否简约按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| round     | 圆角   | Boolean  |    — | false   |
| block     | 块级按钮   | Boolean  |    — | false   |
| bg-color     | 背景颜色   | string    | 自定义 |     —    |
| color     | 文字颜色   | string    |  自定义 |     —    |
| border-color     | 边框颜色   | string    |   自定义 |     —    |
