# Grid 网格
----
### 配合 xm-grids 使用
``` html
<xm-grids row="3">...</xm-grids>
```
### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| row    | 每行显示列数   | String  |  2,3,4,5,6 |  4   |


### 基础用法
使用```href```属性来定义 Grid 的样式，icon 和 text 两个slot
``` html
<xm-grids row="3">
    <xm-grid href="https://github.com/monw3c/xmui">
        <span slot="icon" class="xm__icon--phone"></span>
        <span slot="text">手机</span>
    </xm-grid>
    <xm-grid>
        <span slot="icon" class="xm__icon--lbsfill" @click="clickAction"></span>
        <span slot="text">位置</span>
    </xm-grid>
    <xm-grid>
        <span slot="icon" class="xm__icon--lock"></span>
        <span slot="text">密码</span>
    </xm-grid>
    <xm-grid>
        <span slot="icon" class="xm__icon--qrcode"></span>
        <span slot="text">扫码</span>
    </xm-grid>
    <xm-grid>
        <span slot="icon" class="xm__icon--date"></span>
        <span slot="text">时间</span>
    </xm-grid>
    <xm-grid>
        <span slot="icon" class="xm__icon--contact"></span>
        <span slot="text">电话</span>
    </xm-grid>
</xm-grids>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| href     | 设置链接   | String  |  — | javascript:;   |
