# form 表单
----
##### 配合 xm-cell-item 和 xm-cell-group 使用

## input

###### 基础用法
使用```type```、```name```、```max```、```value```、```readonly```、```disabled```、```autocomplete```和```placeholder```属性来定义 Input 的样式。
``` html
<xm-cell-group>
    <xm-cell-item>
        <span slot="left">用户名：</span>
        <xm-input slot="right" v-model="value1" name="name1" max="10" placeholder="请输入用户名" @blur="inputAction1" @focus="inputAction2"></xm-input>
    </xm-cell-item>
    <xm-cell-item>
        <span slot="left">密  码：</span>
        <xm-input slot="right" type="password" v-model="value1" placeholder="请输入密码"></xm-input>
    </xm-cell-item>
    <xm-cell-item>
        <span slot="leftIcon" class="xm__icon--phone"></span>
        <xm-input slot="right" type="tel" v-model="value1" placeholder="请输入手机号"></xm-input>
        <xm-button slot="right" type="warning" class="btn__block" style="padding: 6px;width: 120px;font-size: 12px;">获取验证码</xm-button>
    </xm-cell-item>
    <xm-cell-item>
        <xm-input slot="right" :value="value1" placeholder="这里是readonly" readonly></xm-input>
        <span slot="rightIcon" class="xm__icon--delete"></span>
    </xm-cell-item>
    <xm-cell-item>
        <xm-input slot="right" :value="value1" placeholder="这里是disabled"   disabled></xm-input>
        <span slot="rightIcon" class="xm__icon--delete"></span>
    </xm-cell-item>
</xm-cell-group>
```

###### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 设置类型   | String  | text, password, email, number, tel, datetime-local, date, time | text  |
| name    | 设置input name   | String  |    — | —   |
| max     | 设置maxlength   | String    |  — |     —    |
| value     | 绑定值   | String  |    — | —   |
| readonly     | 是否readonly   | Boolean  |    — | false   |
| disabled     | 是否disabled   | Boolean  |    — | false   |
| autocomplete     | 是否autocomplete   | Boolean  |    — | off   |
| placeholder     | 设置placeholder   | String  |    — | —   |

###### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| blur     | 失焦方法   | Function  |    — | —   |
| focus    | 聚焦方法   | Function  |    — | —   |
| input    | 输入方法   | Function  |    — | —   |

## cell

###### 基础用法
有```leftIcon```、```left```、```right```和```rightIcon```四个slot
``` html
# type='link'时，是<a>链接形式
<xm-cell-group>
    <xm-cell-item type='link' href="tel:400517517">
        <span slot="leftIcon" class="xm__icon--contact"></span>
        <span slot="left">联系方式</span>
        <span slot="right">400517517</span>
        <span slot="rightIcon" class="xm__icon--right"></span>
    </xm-cell-item>

    <xm-cell-item>
        <span slot="left">我的消息</span>
        <xm-tag slot="right" type="error" round style="margin-bottom:0;">8</xm-tag>
        <span slot="rightIcon" class="xm__icon--right"></span>
    </xm-cell-item>
</xm-cell-group>
```
###### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 设置类型   | String  | link | —  |
| href    | 设置href   | String  |  — | —   |


## textarea

###### 基础用法
有```placeholder```、```value```和```max```属性
``` html
<xm-cell-group>
    <xm-cell-item>
        <xm-textarea slot="right" placeholder="请输入留言，50字以内" :value="value" @input="textareaAction" max="50"></xm-textarea>
    </xm-cell-item>
</xm-cell-group>
```

###### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| placeholder   | 设置placeholder  | String  | — | —  |
| value    | 绑定值   | String  |  — | —   |
| max    | 设置maxlength   | String  |  — | —   |

###### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| input    | 输入方法   | Function  |    — | —   |



## select

###### 基础用法
有```data```和```right```属性
``` html
<xm-cell-group>
    <xm-cell-item>
        <xm-select slot="right" :data="selectList" @change="selectAction"></xm-select>
        <span slot="rightIcon" class="xm__icon--right"></span>
    </xm-cell-item>
    <xm-cell-item>
        <span slot="left">出行方式</span>
        <xm-select slot="right" right :data="selectList"></xm-select>
        <span slot="rightIcon" class="xm__icon--right"></span>
    </xm-cell-item>
</xm-cell-group>
```

###### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data   | 传入的option数组  | Array  | — | —  |
| right    | 设置居右显示   | Boolean  |  — | false   |

###### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| change    | select改变时的方法   | Function  |    — | —   |


## switch
checkbox的另一种表现，有```value```属性
``` html
<xm-cell-group>
    <xm-cell-item>
        <span slot="left">是否保存</span>
        <xm-switch slot="right" value="switch" @input="switchAction"></xm-switch>
    </xm-cell-item>
</xm-cell-group>
```

###### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value   | 绑定值  | String  | — | —  |

###### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| input    | 输入方法   | Function  |    — | —   |


## radio 


## checkbox