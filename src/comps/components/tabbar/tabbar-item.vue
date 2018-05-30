<template>
    <div @click="itemAciton" class="xm__tabbar--item" :class="{'xm__tabbar--item-active':isActive}">
        <div class="xm__tabbar--item-icon">
          <i class="xm__icon" :class="icon" v-if="icon"></i>
          <img v-else-if="imgSrc&&!icon" :src="imgSrc">
          <div v-if="badge" class="xm__tabbar--item-badge">{{badge}}</div>
          <div v-else-if="!badge&&dot" class="xm__tabbar--item-dot"></div>
        </div>
        <div class="xm__tabbar--item-text"><slot></slot></div>
    </div>
    <!-- 2017/12/29修改，思路来自vant -->
    <!-- <a v-if="type==='link'" :href="computeHref" @click="itemAciton" class="xm__tabbar--item" :class="{'xm__tabbar--item-active':active}">
        <div class="xm__tabbar--item-icon">
          <i class="xm__icon" :class="icon" v-if="icon"></i>
          <img v-else-if="imgSrc&&!icon" :src="imgSrc">
          <div v-if="badge" class="xm__tabbar--item-badge">{{badge}}</div>
        </div>
        <div class="xm__tabbar--item-text"><slot></slot></div>
    </a>
    <router-link v-else-if="type==='router'" :to="href" @click="itemAciton" class="xm__tabbar--item" :class="{'xm__tabbar--item-active':active}">
        <div class="xm__tabbar--item-icon">
          <i class="xm__icon" :class="icon" v-if="icon"></i>
          <img v-else-if="imgSrc&&!icon" :src="imgSrc">
          <div v-if="badge" class="xm__tabbar--item-badge">{{badge}}</div>
        </div>
        <div class="xm__tabbar--item-text"><slot></slot></div>
    </router-link> -->
</template>

<script>
export default {
  name: 'xm-tabbar-item',
  props: {
    type: {
      type: String,
      default: 'router'
    },
    icon: {
      type: String,
      default: ''
    },
    href: {
      type: [ String, Object ],
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    },
    badge: {
      type: String,
      default: ''
    },
    dot: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    itemAciton (event) {
      this.$emit('click', event)
      this.$parent.$emit('input', this.href.path)
      this.routerLink()
    },
    routerLink () { // 思路来自vant https://github.com/youzan/vant/blob/dev/packages/mixins/router-link.js
      const { type, href, $router } = this
      if (type === 'router' && $router) {
        $router.push(href)
      } else {
        location.href = href
      }
    }
  },
  computed: {
    isActive () {
      if (this.$parent.value === this.href.path) {
        return true
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
