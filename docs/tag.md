# Tag 标签
----
### 基础用法
使用```type```、```bgColor```、```color```、```borderColor```和```round```属性来定义 Tag 的样式。
``` html
<XMTag>普通</XMTag>
<XMTag type="primary">primary</XMTag>
<XMTag type="success">success</XMTag>
<XMTag type="warning">warning</XMTag>
<XMTag type="error" round>error</XMTag>
<XMTag bgColor="#fc0" color="#e0439a" borderColor="#fc0">自定义颜色</XMTag>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| round     | 圆角   | Boolean  |    — | false   |
| bgColor     | 背景颜色   | string    | 自定义 |     —    |
| color     | 文字颜色   | string    |  自定义 |     —    |
| borderColor     | 边框颜色   | string    |   自定义 |     —    |
