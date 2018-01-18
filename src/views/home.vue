<template>
  <div class="wrap">
    <h1><img src="../assets/logo.png"/></h1>
    <h3>{{ msg }}</h3>

    <h2>基础组件</h2>
    <h4>按钮</h4>
    <xm-button>普通</xm-button>
    <xm-button type="primary" @click="btnClick" icon="xm__icon--checked" >主要</xm-button>
    <xm-button type="error" icon="xm__icon--checked" ></xm-button>
    <xm-button type="warning" disabled>禁止</xm-button>
    <xm-button plain>简约</xm-button>
    <xm-button type="text" icon="xm__icon--checked">文字</xm-button>
    <xm-button loading type="success">loading状态</xm-button>
    <xm-button bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</xm-button>
    <br/><br/>
    <xm-button bg-color="#fcb" color="#e0439a" border-color="#fcb" block no-radius class="btn__block">无圆角块状</xm-button>
    <br/>
    <xm-button round long>100%宽圆角</xm-button>
    <br/><br/>
    <xm-button-group class="btn__group">
      <xm-button type="warning">警告</xm-button>
      <xm-button type="primary" @click="btnClick" icon="xm__icon--checked" >主要</xm-button>
      <xm-button type="success" icon="xm__icon--loading">成功</xm-button>
    </xm-button-group>
    

    <h4>标签</h4>
    <xm-tag>普通</xm-tag>
    <xm-tag type="primary">primary</xm-tag>
    <xm-tag type="success">success</xm-tag>
    <xm-tag type="warning" round>warning</xm-tag>
    <xm-tag type="error" round>error</xm-tag>
    <xm-tag bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</xm-tag>
    <xm-tag type="success" v-if="tag1" closable @close="tag1=false">success</xm-tag>

    <h4>搜索框</h4>
    <p style="text-align:left;font-size: 14px;">input方法监听的值：{{inputValue}}</p>
    <form action="/"><xm-search bg-color="#09c" @action="searchAction" v-model="value" action-text-color="#fff"></xm-search></form>
    <xm-search placeholder="自定义placeholder" v-model="value" show-action @action="searchAction" @input="inputAction" action-text-color="#2d8cf0">search</xm-search>


    <h4>加载更多</h4>
    <xm-loadmore @action="loadMore"></xm-loadmore>
    <xm-loadmore icon color="#2d8cf0">loading...</xm-loadmore>
    <xm-loadmore no-data>暂无数据</xm-loadmore>
    <xm-loadmore no-data>▪</xm-loadmore>


    <h4>表单</h4>
    <div class="form-demo">
      <xm-cell-group>
        <!-- <div slot="top">头部的</div> -->
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
          <xm-button slot="right" type="error" class="btn__block" style="padding: 6px;width: 120px;font-size: 12px;">获取验证码</xm-button>
        </xm-cell-item>
        <xm-cell-item>
          <xm-input slot="right" :value="value1" placeholder="这里是readonly" readonly></xm-input>
          <span slot="rightIcon" class="xm__icon--delete"></span>
        </xm-cell-item>
        <xm-cell-item>
          <xm-input slot="right" :value="value1" placeholder="这里是disabled"   disabled></xm-input>
          <span slot="rightIcon" class="xm__icon--delete"></span>
        </xm-cell-item>
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
        <xm-cell-item>
          <xm-textarea slot="right" placeholder="请输入留言，50字以内" :value="value" @input="textareaAction" max="50"></xm-textarea>
        </xm-cell-item>
        <xm-cell-item>
          <xm-select slot="right" :data="selectList" @change="selectAction"></xm-select>
          <span slot="rightIcon" class="xm__icon--right"></span>
        </xm-cell-item>
        <xm-cell-item>
          <span slot="left">出行方式</span>
          <xm-select slot="right" right :data="selectList"></xm-select>
          <span slot="rightIcon" class="xm__icon--right"></span>
        </xm-cell-item>
        <xm-flexbox>
          <div style="width:30%"><xm-button block no-radius long type="default" style="margin-top:10px">取消</xm-button></div>
          <xm-flexbox-item><xm-button block no-radius long type="success" style="margin-top:10px">提交</xm-button></xm-flexbox-item>
        </xm-flexbox>
      </xm-cell-group>

      <xm-cell-group>
        <xm-cell-item>
          <span slot="left">不让他看我的朋友圈</span>
          <xm-switch slot="right" :value="switch1" @input="switchAction"></xm-switch>
        </xm-cell-item>
        <xm-cell-item>
          <span slot="left">不看他的朋友圈</span>
          <xm-switch slot="right" :value="switch2" @input="switchAction"></xm-switch>
        </xm-cell-item>
      </xm-cell-group>

      <xm-cell-group title="单选" class="xm-radio-group">
        <xm-cell-item>
          <xm-radio-group slot="right" v-model="radio" color="#4cd864">
            <xm-radio value="巴士"></xm-radio>
            <xm-radio value="火车"></xm-radio>
            <xm-radio value="飞机" disabled>飞机--disabled</xm-radio>
            <xm-radio value="单车">单车</xm-radio>
          </xm-radio-group>
        </xm-cell-item>
      </xm-cell-group>

      <xm-cell-group title="复选" class="xm-checkbox-group" >
        <xm-cell-item>
          <xm-checkbox-group slot="right" v-model="checkbox" color="#4cd864">
            <xm-checkbox value="1">巴士</xm-checkbox>
            <xm-checkbox value="2">火车</xm-checkbox>
            <xm-checkbox value="3" disabled>飞机--disabled</xm-checkbox>
            <xm-checkbox value="4">单车</xm-checkbox>
          </xm-checkbox-group>
        </xm-cell-item>
      </xm-cell-group>
      
      

      <xm-cell-group>
        <div slot="bottom" style="overflow: hidden;word-break: break-all;text-align: left;padding-left: 10px;font-size: 14px;">
          <p>您输入：{{inputVal}}</p>
          <p>留言：{{textareaVal}}</p>
          <p>出行方式：{{selectVal}}</p>
          <p>朋友圈：{{switchVal}}</p>
          <p>单选：{{radio}}</p>
          <p>复选：{{checkbox}}</p>
        </div>
      </xm-cell-group>

    </div>


    <h4>网格</h4>
    <xm-grids row="3">
      <xm-grid href="https://github.com/monw3c/xmui">
        <span slot="icon" class="xm__icon--phone"></span>
        <span slot="text">手机</span>
      </xm-grid>
      <xm-grid @click="gridClick">
        <span slot="icon" class="xm__icon--lbs"></span>
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



    <h4>flex布局</h4>
    <xm-flexbox class="flex">
      <div>普通div</div>
      <xm-flexbox-item>默认的水平flex div</xm-flexbox-item>
      <div>普通div</div>
    </xm-flexbox>
    <br>
    <xm-flexbox direction="vertical" class="flex">
      <div>普通div</div>
      <xm-flexbox-item>direction="vertical" 的垂直flex div</xm-flexbox-item>
      <div>普通div</div>
    </xm-flexbox>




    <h4>导航栏(顶部)</h4>
    <div class="navbar-wrap">
      <xm-navbar title="首页文字很长很长很长啊啊啊啊啊" bgcolor='#fff' color="#333" left-text="返回" left-icon="xm__icon--left" right-text="设置" @left-action="clickLeft" @right-action="clickRight"></xm-navbar>
      <br>
      <xm-navbar img-src="https://github.com/monw3c/xmui/blob/master/static/logo.jpg?raw=true" left-icon="xm__icon--left" right-icon="xm__icon--edit"></xm-navbar>
    </div>



    <h4>标签栏(底部)</h4>
    <div class="tabbar-wrap">
      <xm-tabbar>
        <xm-tabbar-item icon="xm__icon--home" type="link" href="https://github.com/monw3c/xmui" active>首页</xm-tabbar-item>
        <xm-tabbar-item icon="xm__icon--mall" :href="hrefObj" badge="8" @click="routerAction"><span slot="badge">8</span>商城</xm-tabbar-item>
        <xm-tabbar-item icon="xm__icon--add" href="add" class="add"></xm-tabbar-item>
        <xm-tabbar-item href="###" img-src="https://github.com/monw3c/xmui/blob/master/static/logo.jpg?raw=true">自定义图标</xm-tabbar-item>
        <xm-tabbar-item icon="xm__icon--date" href="my" badge="11">我的</xm-tabbar-item>
      </xm-tabbar>
    </div>



    <h4>Tab</h4>




    <h2>弹出层</h2>
    <h4>Modal</h4>
    <xm-button type="success" @click="modalClick1">alert</xm-button>
    <xm-button type="primary" @click="modalClick2">自定义内容confirm</xm-button>
    <xm-button type="error" @click="modalClick3">特殊应用层</xm-button>
    <br>
    <xm-button type="success" @click="modalClick4">全局alert层</xm-button>
    <xm-button type="primary" @click="modalClick5">全局confirm层,带回调函数</xm-button>
    <xm-button type="warning" @click="modalClick6">全局prompt层,带回调函数</xm-button>

    <xm-modal type="alert" :visible="modalVisible1" @close="modalClose1" @confirm="modalOk1" dialog-title="提示" color="#19be6b" :z-index="zIndex" :mask-closable="false">点击背景功能关闭</xm-modal>
    <xm-modal type="confirm" dialog-title="填写资料" :visible="modalVisible2" @close="modalClose2" @confirm="modalOk2" color="#19be6b" :z-index="zIndex">
      <xm-input v-model="value2" name="name2" max="10" placeholder="请输入用户名" @blur="inputAction1" @focus="inputAction2"></xm-input>
      <xm-textarea placeholder="请输入留言，50字以内" :value="value3" @input="textareaAction3" max="50"></xm-textarea>
    </xm-modal>
    <xm-sp-modal :visible="modalVisible3" @close="modalClose3" :z-index="zIndex"><img src="https://m.360buyimg.com/n12/s750x750_jfs/t13243/363/119511899/34477/f555b966/5a03ffafNd99ceef4.jpg"/></xm-sp-modal>


    <h4>Toast</h4>
    <xm-button type="success" @click="toastClick1">文字</xm-button>
    <xm-button type="primary" @click="toastClick2">loading</xm-button>
  

    <h4>Loading</h4>
    <xm-loading></xm-loading>
    <!-- 自定义定位右上角 -->
    <xm-loading class="right-top-loading" width="20" height="20" color="#ed3f14"></xm-loading>
    <xm-loading has-text>自定义文字</xm-loading>
    <!-- 测试开启 -->
    <!-- <xm-loading has-text fullScreen>全屏的loading</xm-loading> -->
    <xm-loading has-text vertical border-width="8">垂直的loading</xm-loading>
    

    <h4>ActionSheet</h4>
    <xm-button type="success" @click="actionSheetVisible1=true">有取消</xm-button>
    <xm-button type="primary" @click="actionSheetVisible2=true">无取消</xm-button>

    <xm-actionsheet :item-list="itemList" cancel="取消" cancel-color="#19be6b" v-model="actionSheetVisible1" header="这里是个标题"></xm-actionsheet>
    <xm-actionsheet :item-list="itemList" v-model="actionSheetVisible2"></xm-actionsheet>


    <h4>Popup</h4>






    <h4>轮播</h4>




    <h4>时间选择器</h4>
    

    
    <h2>应用组件</h2>

    <h4>工单流程</h4>
    <xm-step :step="step" :step-list="stepList"></xm-step>


    <h4>Skeleton骨架</h4>
    <xm-skeleton type="circle" @click.native="modalClick1"></xm-skeleton>
    <xm-skeleton  animate="loading"></xm-skeleton>

    <div class="topic-loading-item">
      <div class="loading-item-one">
        <xm-skeleton type="circle"></xm-skeleton>
        <xm-skeleton width="40%"></xm-skeleton>
      </div>
      <div class="loading-item-two">
        <xm-skeleton width="80%"></xm-skeleton>
      </div>
      <div class="loading-item-three">
        <xm-skeleton width="60%"></xm-skeleton>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: `xmui - 基于vue2.x，可复用UI组件`,
      value: '',
      value1: '',
      value2: '',
      value3: '',
      inputValue: '',
      modalVisible1: false,
      modalVisible2: false,
      modalVisible3: false,
      zIndex: 3000,
      stepList: ['发起工单', '主管审批', '经理审批', '总监核查', '结束'],
      step: 2,
      tag1: true,
      switch1: true,
      switch2: false,
      selectList: [
                    { name: '请选择出行方式', value: 0 },
                    { name: '巴士', value: 1 },
                    { name: '快车', value: 2 },
                    { name: '专车', value: 3 },
                    { name: '顺风车', value: 4 },
                    { name: '出租车', value: 5 },
                    { name: '代驾', value: 6 }
      ],
      inputVal: '',
      textareaVal: '',
      selectVal: '',
      switchVal: true,
      gridRow: [
                    { icon: '请选择出行方式', text: '巴士' },
                    { name: '巴士', text: '巴士' },
                    { name: '快车', text: '快车' },
                    { name: '专车', text: '专车' },
                    { name: '顺风车', text: '顺风车' },
                    { name: '出租车', text: '出租车' },
                    { name: '代驾', text: '代驾' }
      ],
      radio: '巴士',
      checkbox: ['1', '4'],
      hrefObj: { path: '/mall', name: 'mall', params: { userId: 123 } },
      itemList: [
        { text: '顺风车',
          callBack: () => {
            this.$modal.alert({
              title: '提示',
              content: '我是actionsheet弹出来的',
              color: '#19be6b'
            })
          }
        },
        { text: '巴士', callBack: () => {} },
        { text: '快车', callBack: () => {} },
        { text: '专车', callBack: () => {} }
      ],
      actionSheetVisible1: false,
      actionSheetVisible2: false
    }
  },
  methods: {
    clickLeft () {
      alert('左边')
    },
    clickRight () {
      alert('右边')
    },
    routerAction () {

    },
    gridClick () {
      alert(1)
    },
    switchAction (val) {
      this.switchVal = val
    },
    inputAction2 () {

    },
    inputAction1 (val) {
      this.inputVal = val
    },
    selectAction (val) {
      this.selectVal = val
    },
    textareaAction (val) {
      this.textareaVal = val
    },
    textareaAction3 (val) {
      this.value3 = val
    },
    toastClick1 () {
      this.$toast.text({content: '太长会换行呢，15个字以内最好', direction: 'bottom'})
    },
    toastClick2 () {
      this.$toast.loading({
        // mask: false
      })
    },
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
    modalClick6 () {
      this.$modal.prompt({
        title: '你想怎么样呢？',
        placeholder: '填入您的支付宝密码',
        color: '#ed3f14',
        // readonly: true,
        callBack (val) {
          this.$modal.alert({
            title: '我爱你',
            content: `密码是${val}，我爱你真的，把帐号也发我一遍 `,
            color: '#19be6b'
          })
        }
      })
    },
    btnClick () {

    },
    closeTag () {
      this.tag1 = false
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
      // alert(`好的1`)
      this.modalVisible1 = false
      // alert(this.modalVisible)
    },
    modalOk2 (e) {
      alert(`${this.value2} 和 ${this.value3}`)
      this.modalVisible2 = false
      this.value2 = ''
      this.value3 = ''
    }
  },
  mounted: () => {
    // alert(this.modalVisible)

  }
}
</script>

<style scoped lang="scss">
#demo-wrap{
  margin: 10px auto;
}
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
  background-color: #e9e9e9;
  padding: 10px;
}
h2{
  text-align: left;
  width: 100%;
  border-bottom: 1px dashed #ededed;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
  margin-top: 30px;
  margin-bottom: 0;
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
.xm__btn,.xm__tag{
  margin-bottom: 10px;
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
  z-index: 9999;
}
.right-top-loading.xm__loading--wrap{
  margin: 0;
}
.form-demo{
  width: 98%;
  margin: 0 auto;
  background: #f5f5f5;
  padding: 1%;
}
// 骨架demo
.topic-loading-item{
  margin-top: 20px;
}
.topic-loading-item .loading-item-one{
  display: flex;
  align-items: center;
}
.topic-loading-item .loading-item-one .xm__skeleton--bar{
  margin-left: 10px;
}
.topic-loading-item .loading-item-two {
    margin-top: 10px;
}
.topic-loading-item .loading-item-three {
    margin-top: 10px;
}
.xm__tabbar{
  background: #fff;
}
.tabbar-wrap, .navbar-wrap{
  background: #f5f5f5;
  padding: 10px;
}

.xm__navbar--title img{
  height: 30px;
}

.flex.xm__flexbox{
  border:1px solid #eee;
  font-size: 16px;
}
.flex.xm__flexbox.xm__flex--vertical{
  border:none;
  height: 300px;
}
.flex.xm__flexbox div:nth-child(odd){
  background: #ededed;
  width: 100px;
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.flex.xm__flexbox.xm__flex--vertical div{
  width: 100%;
}
.flex.xm__flexbox.xm__flex--vertical .xm__flex--item{
  background: #ddd;
  align-items: center;
  justify-content: center;
  display: flex;
}

</style>

