<script type="text/babel">
import accountMenu from './account-menu'
export default {
  name: 'top-nav',
  components: {accountMenu}
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .top-nav
    .logo
      img(src="./svg/logo.svg", alt="Logo")
      .txt.caps Nanobox
    .link.caps
      img(src="./svg/home.svg", alt="Home")
      .txt Home
    .link.caps
      img(src="./svg/support.svg", alt="Support")
      .txt Support
    account-menu
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .top-nav    {display: flex; align-items: center;
    .logo     {display: flex; align-items: center; cursor: pointer; margin-right:auto;
      img     {width:45px; }
      .txt    {font-size:21px; color:#94ACBA; font-weight: $semibold; margin-left:20px; letter-spacing: 0.15em; }
      &:hover {
        .txt  {color:#3B5E73}
      }
    }
    .link     {display: flex; align-items: center; font-size:11px; color:#3F5F6B; margin:0 15px; cursor:pointer;
      img     {width:10px; margin-right:7px; }
      &:hover {color:#012E7A; }
    }
    .account-menu{margin-left:10px; }
  }
</style>
