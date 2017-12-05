<script type="text/babel">
import { mapGetters, mapActions } from 'vuex'

// Dependencies for the legacy component
// import $ from 'jquery'
require("expose-loader?$!jquery");
require('script-loader!sequin/rel/app.js')
require('script-loader!velocity-animate/velocity.js')
require('script-loader!shadow-icons-old/rel/app.js')
require('script-loader!jade/runtime.js')
require('script-loader!lexi-old/rel/app.js')
require('lexi-old/rel/style.css')
// The legacy component
require('script-loader!nanobox-app-launch/rel/app.js')
require('nanobox-app-launch/rel/style.css')

export default {
  name: 'app-launch',
  computed:{
    ...mapGetters('appLaunch', ['providers']),
  },

  // Load the providers
  mounted(){
    this.$store.dispatch('appLaunch/getProviders')
  },

  // On data load, instantiate the component
  watch:{
    providers(){
      console.log( $ )
      console.log( castShadows )
      let app = new nanobox.AppLaunch( $(this.$refs.main) )
      let config = {
        providers      : this.providers,
        appLaunchCb    : ()=>{},
        onCancel       : ()=>{},
        validateNameCb : ()=>{}
      }
      app.createAppLauncher(config)
    }
  },

}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .app-launch
    .holder(ref="main")
</template>

<!--
  ***** C S S *****
-->
<style lang="scss">
  // @import "/node-modules/nanobox-app-launch/rel/style.css";
</style>
<style lang="scss" scoped>
  .app-launch {width:960px; margin:40px auto 0;}
</style>
