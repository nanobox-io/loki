<script type="text/babel">
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'env-vars',
  // Data sources
  computed:{
    ...mapGetters(['allVars']),
  },
  // Actions to call on the model
  methods: {
    ...mapActions(['deleteVar']),
  },
  // On creation, get the data
  created(){
    this.$store.dispatch('getEnvVars')
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .env-vars
    h1 Environment Variables
    .var(v-for="v in allVars" )
      .key {{ v.key }}
      .val {{ v.val }}
      .delete(@click="deleteVar( {varKey: v.key})") delete
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .env-vars      {max-width:400px; margin: 0 auto; display: flex; flex-direction: column;
    .var         {display: flex;
      .key:after {content:" :"}
      .val       {margin-left:10px; }
      .delete    {margin-left:18px; color:#0D73B4; cursor:pointer;
        &:hover  {color:#FF0054}
      }
    }
  }
</style>
