# Search 搜索框
----
### 基础用法
 使用```action-text-color```、```bg-color```和```placeholder```属性来定义 Search 的样式。
``` html
<form action="/"><XMSearch bg-color="#09c" @action="searchAction" v-model="value"></XMSearch></form>

<XMSearch placeholder="自定义placeholder" v-model="value" show-action @action="searchAction" @input="inputAction" action-text-color="#2d8cf0">search</XMSearch>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| action-text-color  | 方法文字颜色   | string    |  自定义  |     —    |
| bg-color     | 背景颜色   | string  | 自定义 |  —   |
| placeholder     | placeholder   | string    | 自定义 |   请输入搜索关键字    |

### 方法
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| action     | 按钮操作   | string    |  自定义  |     —    |
| input     | input监听方法   | string  |  自定义  |  —   |