<template>
  <div class="wrap">
    <h1><img src="../assets/logo.png"/></h1>
    <h3>{{ msg }}</h3>

    <h2>通用组件</h2>
    <h4>按钮</h4>
    <xm-button>普通按钮</xm-button>
    <xm-button type="primary" @click="btnClick" icon="xm__icon--link" >primary按钮</xm-button>
    <xm-button type="error" icon="xm__icon--link" ></xm-button>
    <xm-button type="warning" disabled>禁止按钮</xm-button>
    <xm-button plain>简约按钮</xm-button>
    <xm-button type="text" icon="xm__icon--link">文字按钮</xm-button>
    <xm-button loading type="success">loading状态按钮</xm-button>
    <xm-button bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</xm-button>
    <br/><br/>
    <xm-button bg-color="#fcb" color="#e0439a" border-color="#fcb" block class="btn__block">块按钮</xm-button>
    <br/>
    <xm-button round long>长按钮</xm-button>
    <br/><br/>
    <xm-button-group class="btn__group">
      <xm-button type="warning">警告按钮</xm-button>
      <xm-button type="primary" @click="btnClick" icon="xm__icon--link" >primary按钮</xm-button>
    </xm-button-group>
    

    <h4>标签</h4>
    <xm-tag>普通</xm-tag>
    <xm-tag type="primary">primary</xm-tag>
    <xm-tag type="success">success</xm-tag>
    <xm-tag type="warning">warning</xm-tag>
    <xm-tag type="error" round>error</xm-tag>
    <xm-tag bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</xm-tag>

    <h4>搜索框</h4>
    <p style="text-align:left">input方法监听的值：{{inputValue}}</p>
    <form action="/"><xm-search bg-color="#09c" @action="searchAction" v-model="value"></xm-search></form>
    <xm-search placeholder="自定义placeholder" v-model="value" show-action @action="searchAction" @input="inputAction" action-text-color="#2d8cf0">search</xm-search>

    <h4>头部</h4>


    <h4>底部</h4>


    <h4>tab切换</h4>


    <h4>Modal弹出层</h4>


    <h4>加载更多</h4>
    <xm-loadmore></xm-loadmore>
    <xm-loadmore icon color="#2d8cf0">loading...</xm-loadmore>
    <xm-loadmore no-data>暂无数据</xm-loadmore>
    <xm-loadmore no-data>▪</xm-loadmore>

    <h4>表单</h4>



    <h2>应用组件</h2>

    <h4>投票</h4>

    

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: `xmui - 基于vue2.x，可复用UI组件`,
      value: '',
      inputValue: ''
    }
  },
  methods: {
    btnClick () {
      alert(1)
    },
    searchAction (e) {
      this.value = e
      alert(this.value)
    },
    inputAction (e) {
      this.inputValue = e
    }
  },
  mounted: () => {
    // console.log('1111')
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

