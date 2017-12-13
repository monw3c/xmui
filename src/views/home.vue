<template>
  <div class="wrap">
    <h1><img src="../assets/logo.png"/></h1>
    <h3>{{ msg }}</h3>

    <h2>基础组件</h2>
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
      <xm-button type="success" icon="xm__icon--loading">success按钮</xm-button>
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


    <h4>加载更多</h4>
    <xm-loadmore @action="loadMore"></xm-loadmore>
    <xm-loadmore icon color="#2d8cf0">loading...</xm-loadmore>
    <xm-loadmore no-data>暂无数据</xm-loadmore>
    <xm-loadmore no-data>▪</xm-loadmore>


    <h4>表单</h4>


    <h4>头部</h4>


    <h4>底部</h4>


    <h4>tab切换</h4>


    <h2>弹出层</h2>
    <h4>Modal</h4>
    <xm-button type="success" @click="modalClick1">alert</xm-button>
    <xm-button type="primary" @click="modalClick2">confirm</xm-button>
    <xm-button type="error" @click="modalClick3">特殊应用层</xm-button>
    <xm-button type="success" @click="modalClick4">全局alert层</xm-button>
    <xm-button type="primary" @click="modalClick5">全局confirm层,带回调函数</xm-button>

    <xm-modal type="alert" :visible="modalVisible1" @close="modalClose1" @confirm="modalOk1" dialog-title="提示" color="#19be6b" :z-index="zIndex" :mask-closable="false">点击背景功能关闭</xm-modal>
    <xm-modal type="confirm" :visible="modalVisible2" @close="modalClose2" @confirm="modalOk2" color="#19be6b" :z-index="zIndex">我哦哦哦哦哦</xm-modal>
    <xm-sp-modal :visible="modalVisible3" @close="modalClose3" :z-index="zIndex"><img src="../assets/3333.png"/></xm-sp-modal>


    <h4>Toast</h4>



    <h4>Loading</h4>
    <xm-loading></xm-loading>
    <!-- 自定义定位右上角 -->
    <xm-loading class="right-top-loading" width="20" height="20" color="#ed3f14"></xm-loading>
    <xm-loading has-text>自定义文字</xm-loading>
    <!-- 测试开启 -->
    <!-- <xm-loading has-text fullScreen>全屏的loading</xm-loading> -->
    <xm-loading has-text vertical>垂直的loading</xm-loading>
    <!-- <h2>应用组件</h2>

    <h4>投票</h4>

     -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: `xmui - 基于vue2.x，可复用UI组件`,
      value: '',
      inputValue: '',
      modalVisible1: false,
      modalVisible2: false,
      modalVisible3: false,
      zIndex: 3000
    }
  },
  methods: {
    modalClick4 () {
      this.$modal.alert({
        title: '这里可以自定义',
        content: '开启3秒关闭，取消背景层关闭',
        color: '#19be6b',
        autoClose: true,
        maskClosable: false
      })
    },
    modalClick5 () {
      this.$modal.confirm({
        title: '提示',
        content: '你想怎么样呢？',
        color: '#19be6b',
        callBack () {
          this.$modal.alert({
            title: '这里可以自定义',
            content: '开启3秒关闭，取消背景层关闭',
            color: '#19be6b',
            autoClose: true,
            maskClosable: false
          })
        }
      })
    },
    btnClick () {

    },
    loadMore () {
      alert(`loadMore`)
    },
    searchAction (e) {
      this.value = e
      alert(this.value)
    },
    inputAction (e) {
      this.inputValue = e
    },
    modalClick1 (e) {
      // alert(this.modalVisible)
      this.modalVisible1 = true
      this.zIndex++
    },
    modalClick2 (e) {
      // alert(this.modalVisible)
      this.modalVisible2 = true
      this.zIndex++
    },
    modalClick3 (e) {
      // alert(this.modalVisible)
      this.modalVisible3 = true
      this.zIndex++
    },
    modalClose1 (e) {
      this.modalVisible1 = false
      // alert(this.modalVisible)
    },
    modalClose2 (e) {
      this.modalVisible2 = false
      // alert(this.modalVisible)
    },
    modalClose3 (e) {
      this.modalVisible3 = false
      // alert(this.modalVisible)
    },
    modalOk1 (e) {
      alert(`好的1`)
      this.modalVisible1 = false
      // alert(this.modalVisible)
    },
    modalOk2 (e) {
      alert(`好的2`)
      this.modalVisible2 = false
      // alert(this.modalVisible)
    }
  },
  mounted: () => {
    // alert(this.modalVisible)

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
  margin: 0 20px;
}
.btn__group::before{
  content: '按钮组';
  font-size:12px;
  position: absolute;
  top: -6px;
  right: -20px;
  background: #fff;
  color: #aaa;
}
.btn__block{
  margin: 0 auto!important;
}
.xm__dialog--special .xm__dialog--bd img{
  width: 100%;
  border-radius: 4px;
}
.xm__loading--wrap{
  margin: 15px auto;
}
.right-top-loading{
  position: fixed;
  right: 5px;
  top: 5px;
}
.right-top-loading.xm__loading--wrap{
  margin: 0;
}
</style>

