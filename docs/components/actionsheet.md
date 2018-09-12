# ActionSheet 上拉菜单
----
### 基础用法
 使用```item-list```、```cancel```、```cancel-color```、```v-model```、```has-icon```和```header```属性来定义 ActionSheet 的样式。
``` html
<xm-actionsheet :item-list="itemList" cancel="取消" cancel-color="#19be6b" v-model="actionSheetVisible1" header="这里是个标题" has-icon></xm-actionsheet>
<xm-actionsheet :item-list="itemList" v-model="actionSheetVisible2"></xm-actionsheet>
```

```js
export default {
  data () {
    return {
      itemList: [
        { text: '顺风车',
          icon: '<span class="xm__icon--loading"></span>',
          callBack: () => {
            this.$modal.alert({
              title: '提示',
              content: '我是actionsheet弹出来的',
              color: '#19be6b'
            })
          }
        },
        { text: '巴士', icon: '<img src="https://github.com/monw3c/xmui/blob/master/static/logo.jpg?raw=true"/>', callBack: () => {} },
        { text: '快车',
          icon: '<p>“别打算XSS攻击”</p>',
          callBack: () => {
            this.$modal.alert({
              title: '提示',
              content: '想了解vue XSS攻击点确定',
              color: '#19be6b',
              callBack: () => {
                location.href = 'https://segmentfault.com/q/1010000009844447'
              }
            })
          }
        },
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
| has-icon     | 是否带图标或图片   | Boolean  | — |  false   |
