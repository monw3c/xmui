# ActionSheet 上拉菜单
----
### 基础用法
 使用```item-list```、```cancel```、```cancel-color```、```v-model```和```header```属性来定义 ActionSheet 的样式。
``` html
<xm-actionsheet :item-list="itemList" cancel="取消" cancel-color="#19be6b" v-model="actionSheetVisible1" header="这里是个标题"></xm-actionsheet>
<xm-actionsheet :item-list="itemList" v-model="actionSheetVisible2"></xm-actionsheet>
```

```js
export default {
  data () {
    return {
      itemList: [
        { text: '顺风车',
          callBack: () => {
            this.$modal.alert({
              title: '提示',
              content: '我是actionsheet弹出来的',
              color: '#19be6b'
            })
          }
        },
        { text: '巴士', callBack: () => {} },
        { text: '快车', callBack: () => {} },
        { text: '专车', callBack: () => {} }
      ],
      actionSheetVisible1: false,
      actionSheetVisible2: false
    }
  }
}
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| item-list  | 传入数组数据   | Array    |  —  |     —    |
| v-model    | 绑定状态   | string  | — |  —   |
| cancel     | 取消按钮文字   | string    |  —|   —    |
| cancel-color | 取消文字颜色   | string  |   — |  —   |
| header     | 标题文字   | string  | — |  —   |

