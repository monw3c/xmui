# Flexbox flex布局
----
### 配合 xm-flexbox 使用
### 基础用法
使用```direction```属性来定义 Flexbox 的样式
``` html
<xm-flexbox>
    <div>普通div</div>
    <xm-flexbox-item>默认的水平flex div</xm-flexbox-item>
    <div>普通div</div>
</xm-flexbox>
    <br>
<xm-flexbox direction="vertical">
    <div>普通div</div>
    <xm-flexbox-item>direction="vertical" 的垂直flex div</xm-flexbox-item>
    <div>普通div</div>
</xm-flexbox>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| direction | 设置垂直布局 | String  |  horizontal，vertical | horizontal   |
