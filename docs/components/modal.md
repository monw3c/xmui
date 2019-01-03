# Modal 弹出层
----
### 基础用法
 使用```type```、```:visible```、```@close```、```@confirm```、```dialog-title```、```confirm-text```、```cancel-text```、```color```、```:z-index```和```:mask-closable```属性来定义 Modal 的样式。
``` html
<xm-modal type="alert" :visible="modalVisible1" @close="modalClose1" @confirm="modalOk1" dialog-title="提示" confirm-text="ok的啦" color="#19be6b" :z-index="zIndex" :mask-closable="false">点击背景功能关闭</xm-modal>
<xm-modal type="confirm" dialog-title="填写资料" :visible="modalVisible2" @close="modalClose2" @confirm="modalOk2" confirm-text="ok啦" cancel-text="窝要关了" color="#19be6b" :z-index="zIndex">
    <xm-input v-model="value2" name="name2" max="10" placeholder="请输入用户名" @blur="inputAction1" @focus="inputAction2"></xm-input>
    <xm-textarea placeholder="请输入留言，50字以内" :value="value3" @input="textareaAction3" max="50"></xm-textarea>
</xm-modal>
```

### 特殊弹出层，是用在活动页面的弹出层，一般为图片展示用
``` html
<xm-sp-modal :visible="modalVisible3" @close="modalClose3" :z-index="zIndex"><img src="https://m.360buyimg.com/n12/s750x750_jfs/t13243/363/119511899/34477/f555b966/5a03ffafNd99ceef4.jpg"/></xm-sp-modal>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type  | 类型   | string    |  alert，confirm  |     —    |
| visible     | 显示钩子   | string  | 自定义 |  —   |
| mask-closable | 可否点击背景关闭   | Boolean    | true，false |   true    |
| color     | 确定文字颜色   | string  | 自定义 |  —   |
| z-index     | z-index   | string  | 自定义 |  —   |
| dialog-title  | 是否有标题内容   | string  | 自定义 | 无标题  |
| confirm-btn   | 是否禁止confirm按钮   | Boolean  | true，false | true  |
| cancel-btn   | 是否禁止cancel按钮   | Boolean  | true，false | true  |
| confirm-text  | 自定义confirm文字  | 自定义  | — |  确定  |
| cancel-text   | 自定义cancel文字  | 自定义  | — |  取消  |

### 方法
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| close     | 取消操作   | Function    |  自定义  |     —    |
| confirm     | 确定操作(:confirm-btn="false"不出现)   | Function  |  自定义  |  —   |
| cancel     | 确定操作(:cancel-btn="false"不出现)   | Function  |  自定义  |  —   |

##  
## 全局弹出层
``` js
this.$modal.confirm(title, content, confirmText, cancelText, color, maskClosable, callBack, closeAction)
this.$modal.alert(title, content, confirmText, color, autoClose, maskClosable, callBack)
this.$modal.prompt(title, placeholder, readonly, confirmText, cancelText, color, maskClosable, callBack, closeAction)

this.$modal.confirm({
        title: '提示',
        content: '你想怎么样呢？',
        confirmText: 'ok啦',
        cancelText: '窝要关了',
        color: '#19be6b',
        callBack () {
          this.$modal.alert({
            title: '这里可以自定义',
            content: '开启3秒关闭，取消背景层关闭',
            confirmText: 'ok啦',
            color: '#19be6b',
            autoClose: true,
            maskClosable: false
          })
        },
        closeAction () {
          this.$toast.text({content: '触发关闭回调函数', direction: 'bottom'})
        }
})

this.$modal.prompt({
        title: '你想怎么样呢？',
        placeholder: '填入您的支付宝密码',
        confirmText: 'ok啦',
        cancelText: '窝要关了',
        color: '#ed3f14',
        readonly: true,
        callBack (val) {
          this.$modal.alert({
            title: '我爱你',
            content: `密码是${val}，我爱你真的，把帐号也发我一遍 `,
            color: '#19be6b'
          })
        }
})
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title  | 标题   | string    |  自定义  |   —    |
| content     | 内容   | string  | 自定义 |  —   |
| maskClosable   | 可否点击背景关闭   | Boolean    | true，false |   true    |
| color     | 确定文字颜色   | string  | 自定义 |  —   |
| autoClose    | 自动关闭   | Boolean  | true，false |  默认为3秒，alert有，confirm和prompt无   |
| callBack     | 回调函数   | Function  | 自定义 | —  |
| closeAction  | 关闭回调函数   | Function  | 自定义 | —  |
| placeholder  | prompt的input属性placeholder   | string  | — |  —  |
| confirmText  | 自定义confirm文字  | 自定义  | — |  确定  |
| cancelText  | 自定义cancel文字  | 自定义  | — |  取消  |