# Toast 轻提示层
----
### 基础用法
使用```content```、```direction```、```mask```和```autoClose```属性来定义 Toast 的样式。
``` js
this.$toast.text(content, direction, mask, autoClose, callBack)
this.$toast.loading(mask, autoClose, callBack)

methods: {
    toastClick1 () {
      this.$toast.text({content: '太长会换行呢，15个字以内最好', direction: 'bottom', mask: true})
    },
    toastClick2 () {
      this.$toast.loading({
        mask: false
      })
    }
}
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| content     | 内容   | string  | 自定义 |  loading无   |
| mask   | 是否有背景   | Boolean    | - |   text为false，loading为true    |
| direction     | 方向   | string  | top,bottom,center |  text独有，默认center   |
| autoClose    | 自动关闭   | Boolean  | - |  默认为3秒，alert有，confirm无   |
| callBack     | 回调函数   | Function  | 自定义 | -  |

