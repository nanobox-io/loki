<script type="text/babel">
import corral from '@/components/core/corral'
import appInfo from '@/components/app-admin/app-info'
export default {
  name       : 'app-admin',
  components : {corral, appInfo},
  data(){
    return{
      // Define the left nav for this page
      nav: [
        {text: "Info", id:"info"},
        {text: "Ownership", id:"ownership"},
        {text: "Deploy", id:"deploy"},
        {text: "Update", id:"update"},
        {text: "Securty", id:"security"},
        {text: "Delete", id:"delete"},
      ],
      activePage: "info"
    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .a-admin
    corral(:nav="nav" v-model="activePage" title="App Admin" @change="activePage = arguments[0]")
      slot
        app-info(v-if="activePage == 'info'" appName="myApp" providerName="Amazon Web Services" region='US-West-1')
        p(v-if="activePage == 'ownership'" ) Create a component for `ownership`
        p(v-if="activePage == 'deploy'" ) Create a component for `deploy`
        p(v-if="activePage == 'update'" ) Create a component for `update`
        p(v-if="activePage == 'security'" ) Create a component for `security`
        p(v-if="activePage == 'delete'" ) Create a component for `delete`
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .app-admin {}
</style>
