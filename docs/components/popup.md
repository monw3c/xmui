# Popup 上滑弹出框
----
### 基础用法
 使用```cancel```、```cancel-color```、```v-model```和```header```属性来定义 Popup 的样式。
``` html
<xm-popup v-model="popupVisible1" header="这里是个标题" cancel="取消" cancel-color="#19be6b">
  <xm-cell-group class="selectSign">
    <xm-cell-item>
      <img src="https://github.com/monw3c/xmui/blob/master/static/logo.jpg?raw=true" slot="left" class="img">
      <div class="" slot="right"  @click="openModalBox">
        <p>电子提案 <xm-tag bg-color="#fff" color="#ed3f14" border-color="#ed3f14" round>荐</xm-tag></p>
        <p>通过在网上进行电子提案</p>
      </div>
    </xm-cell-item>
    <xm-cell-item>
      <img src="https://github.com/monw3c/xmui/blob/master/static/logo.jpg?raw=true" slot="left" class="img">
      <div class="" slot="right">
        <p>原始提案</p>
        <p>采用原始方式进行提案，平台只进行记录</p>
      </div>
    </xm-cell-item>
  </xm-cell-group>
</xm-popup>
```

```js
export default {
  data () {
    return {
      popupVisible1: false
    }
  }
}
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model    | 绑定状态   | string  | — |  —   |
| cancel     | 取消按钮文字   | string    |  —|   —    |
| cancel-color | 取消文字颜色   | string  |   — |  —   |
| header     | 标题文字   | string  | — |  —   |

