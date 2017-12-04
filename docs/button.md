# Button 按钮
----
### 基础用法
使用```type```、```plain```、```icon```、```loading```、```long```、```bgColor```、```color```、```borderColor```、```block```和```round```属性来定义 Button 的样式。
<vuep template="#example">

</vuep>

<script v-pre type="text/x-template" id="example">
  <template>
    <XMButton>普通按钮</XMButton>
    <XMButton type="primary" @click="btnClick" icon="xm__icon--link" >primary按钮</XMButton>
    <XMButton type="error" icon="xm__icon--link" ></XMButton>
    <XMButton disabled>禁止按钮</XMButton>
    <XMButton plain>简约按钮</XMButton>
    <XMButton loading>loading状态按钮</XMButton>
    <XMButton bgColor="#fc0" color="#e0439a" borderColor="#fc0">自定义颜色</XMButton>
    <br/><br/>
    <XMButton bgColor="#fcb" color="#e0439a" borderColor="#fcb" block class="btn__block">块按钮</XMButton>
    <br/>
    <XMButton round long>长按钮</XMButton>
    <br/><br/>
    <XMButtonGroup class="btn__group">
      <XMButton>普通按钮</XMButton>
      <XMButton type="primary" @click="btnClick" icon="xm__icon--link" >primary按钮</XMButton>
    </XMButtonGroup>
  </template>

  <script>
    
  </script>
</script>


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
