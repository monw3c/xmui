<template>
  <div id="app">
    <div id="aside">
      <!-- nav -->
    </div>
    <div id="demo-wrap">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
@import "./comps/styles/index";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#aside{
  background: $body-background;
}
</style>
