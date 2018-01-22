<template>
    <div class="xm__cell--box">
        <slot name="top"></slot>
        <div class="xm__cell">
            <div class="xm__cell--title" v-if="title">{{title}}</div>
            <slot></slot>
        </div>
        <slot name="bottom"></slot>
    </div>
</template>

<script>
export default {
  name: 'xm-cell-group',
  props: {
    title: String
  }
}
</script>