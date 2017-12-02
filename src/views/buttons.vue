/* 按钮种类分为 
 * 基础，禁用，图标(可单独)，带加载效果，长按钮，按钮组合，垂直
*/
<template>
  <div class="hello">

    <h1>按钮</h1>
    <XMButton>普通按钮</XMButton>
    <XMButton type="primary" @click="btnClick" icon="xm__icon--link" >primary按钮</XMButton>
    <XMButton type="error" icon="xm__icon--link" ></XMButton>
    <XMButton disabled>禁止按钮</XMButton>
    <XMButton plain>简约按钮</XMButton>
    <XMButton loading>loading状态按钮</XMButton>
    <XMButton bgColor="#fc0" color="#e0439a" borderColor="#fc0">自定义颜色</XMButton>
    <br/><br/>
    <XMButton round long>长按钮</XMButton>
    
    <h1>头部</h1>

    <h1>底部</h1>

    <h1>tab切换</h1>

    <h1>弹出层</h1>

    <h1>加载更多</h1>

  </div>
</template>

<script>
// import { XMButton } from '../comps/index'
export default {
  data () {
    return {

    }
  },
  methods: {
    btnClick () {
      alert(1)
    }
  },
  mounted: () => {
    console.log('1111')
  }
}
</script>

<style scoped lang="scss">



</style>
