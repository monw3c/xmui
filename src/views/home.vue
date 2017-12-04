/* 按钮种类分为 
 * 基础，禁用，图标(可单独)，带加载效果，长按钮，按钮组合，垂直
*/
<template>
  <div class="wrap">
    <h1><img src="../assets/logo.png"/></h1>
    <h3>{{ msg }}</h3>

    <h2>通用组件</h2>

    <h4>按钮</h4>
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


    <h4>标签</h4>
    

    <h4>头部</h4>


    <h4>底部</h4>


    <h4>tab切换</h4>


    <h4>弹出层</h4>ss


    <h4>加载更多</h4>




    <h2>应用组件</h2>

    <h4>投票</h4>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: `xmui - 基于vue2.x，可复用UI组件`
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
.wrap{
  margin: 10px;
}
h1,h3{
  margin: 0;
}
h3{
  font-weight: normal;
  font-size: 16px;
}
h4{
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  border-bottom: 1px dashed #ededed;
  padding: 10px;
}
h2{
  text-align: left;
  width: 100%;
  background-color: #f5f5f5;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
  margin-top: 30px;
}
.btn__group{
  border: 1px solid #eee;
  padding: 10px;
  position: relative;
}
.btn__group::before{
  content: '按钮组';
  font-size:12px;
  position: absolute;
  top: -6px;
  left: -20px;
  background: #fff;
  color: #aaa;
}
.btn__block{
  margin: 0 auto!important;
}
</style>

