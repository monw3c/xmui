# Seamlessscroll 无缝滚动
----
### 基础用法
使用```height```、```speed```、```autoplay```、```align```和```direction```属性来定义 Seamlessscroll 的样式。
``` html
<xm-seamlessscroll autoplay="2000">
    <xm-seamlessscroll-item>只有一条的时候不滚动，默认向上滚动</xm-seamlessscroll-item>
</xm-seamlessscroll>

<xm-seamlessscroll autoplay="3000" direction="down">
    <xm-seamlessscroll-item>邵逸夫奖名单公布</xm-seamlessscroll-item>
    <xm-seamlessscroll-item>女星玛戈基德去世</xm-seamlessscroll-item>
    <xm-seamlessscroll-item>多国谴责美搬使馆</xm-seamlessscroll-item>
</xm-seamlessscroll>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| height     | 设置行高   | String  |   — | 30  |
| speed     | 设置速率   | Number  |  — | 500   |
| autoplay    | 设置滚动间隔   | Number  |  — |  3000   |
| align    | 设置对齐方向   | String  |  left，center，right |  left   |
| direction    | 设置方向   | String  | up，down |  up   |
