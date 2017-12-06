<template>
    <div 
        class="xm__loadMore"
        :style="{color: color}"
        :class="[
        {'xm__loadmore--line is-no-data':noData}
        ]"
    >   
        <i v-if="icon && !noData" class="xm__icon--loading"></i>
        <span class="xm__loadmore--tips"><slot>加载更多</slot></span>
    </div>
</template>

<script>

export default {
  name: 'xm-loadmore',
  props: {
    color: {
      type: String,
      default: ''
    },
    icon: {
      type: Boolean,
      default: false
    },
    noData: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
