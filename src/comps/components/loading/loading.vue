<template>
  <transition name="modal-fade">
    <div class="xm__loading--wrap">
      <div class="xm__mask" v-if="fullScreen"></div>
      <div 
          class="xm__loading"
          :class="[
          {'xm__loading--fullScreen':fullScreen}
          ]"
      >   
          <span class="xm__loading--loader" 
          :class="[
          {'xm__loading--vertical':vertical,'borderRightTransparent':color}
          ]"
          :style="{'width': width+'px','height': height+'px','border-color': color,'border-width': borderWidth+'px'}"
          ></span>
          <span class="xm__loading--text" v-if="hasText"><slot>加载中...</slot></span>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'xm-loading',
  props: {
    color: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    borderWidth: {
      type: String,
      default: ''
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    hasText: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  
</style>
