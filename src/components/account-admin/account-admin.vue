<script type="text/babel">
import corral from '@/components/core/corral'
export default {
  name       : 'account-admin',
  components : {corral},
  data(){
    return{
      // Define the left nav for this page
      nav: [
        {text : "Info",             id:"info"},
        {text : "Billing",          id:"billing"},
        {text : "Account Plan",     id:"account_plan"},
        {text : "Hosting Accounts", id:"hosting_accounts"},
        {text : "My Teams",         id:"my_teams"},
        {text : "Delete",           id:"delete"},
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
  .account-admin
    corral(:nav="nav" v-model="activePage" title="Account Admin" @change="activePage = arguments[0]")
      slot
        p(v-if="activePage == 'info'" ) Create a component for `info`
        p(v-if="activePage == 'billing'" ) Create a component for `billing`
        p(v-if="activePage == 'account_plan'" ) Create a component for `account_plan`
        p(v-if="activePage == 'hosting_accounts'" ) Create a component for `hosting_accounts`
        p(v-if="activePage == 'my_teams'" ) Create a component for `my_teams`
        p(v-if="activePage == 'delete'" ) Create a component for `delete`
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .account-admin {}
</style>
