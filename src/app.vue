<script type="text/babel">
import topNav from './components/top-nav/top-nav'
export default {
  name: 'app',
  components: {topNav}
}
</script>


<!--
  **** H T M L ****
-->

<template lang="pug">
  #app
    link( rel="stylesheet" href="https://use.typekit.net/cqd5kth.css")
    .main
      top-nav
      router-view
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  #app {
    .main{max-width:$app-width; margin:0 auto; }
  }
</style>

<style lang="scss">
  @import './components/core/base';
</style>
