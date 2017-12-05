<script type="text/babel">
import $ from 'jquery'
// Dependencies for the legacy component
// require('jquery/dist/jquery.js')
require('sequin/rel/app.js')
require('velocity-animate/velocity.js')
require('shadow-icons-old/rel/app.js')
require('jade/jade.js')
require('lexi-old/rel/app.js')
require('lexi-old/rel/style.css')
// The legacy component
require('nanobox-app-launch/rel/app.js')
require('nanobox-app-launch/rel/style.css')

export default {
  name: 'app-launch',
  mounted(){
    let app = new nanobox.AppLaunch( $(this.$refs.main) )
    console.log( app )
  }

}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .app-launch(ref="main")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .app-launch {}
</style>
