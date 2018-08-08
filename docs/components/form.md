# Form 表单
----
##### 建议配合 xm-cell-group 和 xm-cell-item 一起使用

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


## textarea

###### 基础用法
有```placeholder```、```value```、```readonly```、```disabled```和```max```属性
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
| readonly     | 是否readonly   | Boolean  |    — | false   |
| disabled     | 是否disabled   | Boolean  |    — | false   |

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
        <xm-select slot="right" :data="selectList" @change="selectAction" v-model="curSelected"></xm-select>
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
| disabled  | 设置不可选   | Boolean  |  — | false   |

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
###### 基础用法
需配合 xm-radio-group 使用，通过```color```属性改变 √ 颜色，```disabled```禁止选中,```hor```为水平单选框，默认不填为垂直
```html
<xm-radio-group v-model="radio" color="#4cd864">
    <xm-radio value="巴士"></xm-radio>
    <xm-radio value="火车"></xm-radio>
    <xm-radio value="飞机" disabled>飞机--disabled</xm-radio>
    <xm-radio value="单车">单车</xm-radio>
</xm-radio-group>

export default {
  data () {
    return {
      radio: '巴士'
    }
  }
}
```

###### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color   | 设置颜色  | String  | — | —  |
| disabled   | 禁止选中  | Boolean  | — | false  |
| hor   | 水平显示  | Boolean  | — | false  |

## checkbox
###### 基础用法
需配合 xm-checkbox-group 使用，通过```color```属性改变 √ 颜色，```disabled```禁止选中
``` html
<xm-checkbox-group v-model="checkbox" color="#4cd864">
    <xm-checkbox value="1">巴士</xm-checkbox>
    <xm-checkbox value="2">火车</xm-checkbox>
    <xm-checkbox value="3" disabled>飞机--disabled</xm-checkbox>
    <xm-checkbox value="4">单车</xm-checkbox>
</xm-checkbox-group>

export default {
  data () {
    return {
      checkbox: ['1', '4']
    }
  }
}
```

###### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color   | 设置颜色  | String  | — | —  |
| disabled   | 禁止选中  | Boolean  | — | false  |