# Toast 弹出层
----
<!-- ### 基础用法
 使用```type```、```:visible```、```@close```、```@confirm```、```dialog-title```、```color```、```:z-index```和```:mask-closable```属性来定义 Modal 的样式。
``` html
<xm-modal type="alert" :visible="modalVisible1" @close="modalClose1" @confirm="modalOk1" dialog-title="提示" color="#19be6b" :z-index="zIndex" :mask-closable="false">点击背景功能关闭</xm-modal>
<xm-modal type="confirm" :visible="modalVisible2" @close="modalClose2" @confirm="modalOk2" color="#19be6b" :z-index="zIndex">我哦哦哦哦哦</xm-modal>
```

### 特殊弹出层，是用在活动页面的弹出层，一般为图片展示用
``` html
<xm-sp-modal :visible="modalVisible3" @close="modalClose3" :z-index="zIndex"><img src="../assets/3333.png"/></xm-sp-modal>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type  | 类型   | string    |  alert，confirm  |     —    |
| visible     | 显示钩子   | string  | 自定义 |  —   |
| mask-closable     | 可否点击背景关闭   | Boolean    | - |   true    |
| color     | 确定文字颜色   | string  | 自定义 |  —   |
| z-index     | z-index   | string  | 自定义 |  —   |
| dialog-title     | 是否有标题内容   | string  | 自定义 | 无标题  |

### 方法
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| close     | 取消操作   | Function    |  自定义  |     —    |
| confirm     | 确定操作   | Function  |  自定义  |  —   |

##  
## 全局弹出层
``` js
this.$modal.confirm(title, content, color, maskClosable, callBack)
this.$modal.alert(title, content, color, autoClose, maskClosable, callBack)

this.$modal.confirm({
        title: '提示',
        content: '你想怎么样呢？',
        color: '#19be6b',
        callBack () {
          this.$modal.alert({
            title: '这里可以自定义',
            content: '开启3秒关闭，取消背景层关闭',
            color: '#19be6b',
            autoClose: true,
            maskClosable: false
          })
        }
})
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title  | 标题   | string    |  自定义  |   —    |
| content     | 内容   | string  | 自定义 |  —   |
| maskClosable   | 可否点击背景关闭   | Boolean    | - |   true    |
| color     | 确定文字颜色   | string  | 自定义 |  -   |
| autoClose    | 自动关闭   | Boolean  | - |  默认为3秒，alert有，confirm无   |
| callBack     | 回调函数   | Function  | 自定义 | -  |
 -->
