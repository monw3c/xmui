# Search 搜索框
----
### 基础用法
 使用```action-text-color```、```cancel-text-color```、```bg-color```、```has-clear```和```placeholder```属性来定义 Search 的样式。
``` html
<form action="/"><xm-search bg-color="#09c" @action="searchAction" v-model="value" action-text-color="#fff"><span slot="search">确定</span></xm-search></form>

<xm-search placeholder="自定义placeholder" v-model="value"  @action="searchAction" @input="inputAction" action-text-color="#777" cancel-text-color="#777"  @cancel="searchCancel"><span slot="search">搜索</span><span slot="cancel">取消</span></xm-search>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| action-text-color  | 方法文字颜色   | string    |  自定义  |     —    |
| cancel-text-color  | 取消文字颜色   | string    |  自定义  |     —    |
| bg-color     | 背景颜色   | string  | 自定义 |  —   |
| placeholder  | placeholder   | string    | 自定义 |   请输入搜索关键字    |
| has-clear    | 是否可清空   | Boolean    | true,false |   true    |


### 方法
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| action     | 按钮操作   | string    |  自定义  |     —    |
| input     | input监听方法   | string  |  自定义  |  —   |
| clear     | clear监听方法   | string  |  自定义  |  —   |

