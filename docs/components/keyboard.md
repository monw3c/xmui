# Keyboard 数字键盘
----
### 基础用法
 使用```visible```、```tips```、```len```、```confirmText```和```styleName```属性来定义 Keyboard 的样式。
``` html
<xm-cell-group>
  <xm-cell-item>
    <span slot="left">房间租金</span>
    <div slot="right" class="xm__cell-right" @click="openCurKeyboard" data-tips='{"title":"房间租金", "placeholder":"请输入房间租金", "name":"roomRentVal", "unit":"这里无效", "isCard":false}' :data-val="roomRentVal">
      <xm-input v-model="roomRentVal" placeholder="元/月" disabled="disabled" ></xm-input>
    </div>
  </xm-cell-item>
  <xm-cell-item>
    <span slot="left">身份证号码</span>
    <div slot="right" class="xm__cell-right" @click="openCurKeyboard" data-tips='{"title":"身份证号码", "placeholder":"请输入身份证号码", "name":"idCardVal", "unit":"/月", "isCard":true}' :data-val="idCardVal">
      <xm-input v-model="idCardVal" placeholder="请输入身份证号码" disabled="disabled" ></xm-input>
    </div>
  </xm-cell-item>
</xm-cell-group>
<xm-keyboard :visible="keyBoardVisible" v-model="curVal" :tips="tips" :len="vLen" @confirm="save" @close="keyBoardClose"></xm-keyboard>

```


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| visible   | 输入框的显示隐藏  | Boolean  | — |  false   |
| len    | 限制输出值的长度 | Number  | — |  6   |
| confirmText    | 确定按钮文字  | String  | — |  确定   |
| tips    | 输入框传入的字典，isCard:true适合身份证键盘，否则为带单位小数点数字键盘  | Object  | 例如：{"title":"房间面积", "placeholder":"请输入房间面积", "name":"roomAreaVal", "unit":"㎡", "isCard":false}' |  —   |


### 方法
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| confirm   | 确定操作   |  Function    |  自定义  |     —    |
| close     | 关闭操作   |  Function    |  自定义  |     —    |
