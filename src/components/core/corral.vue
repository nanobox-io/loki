<!-- saddle-switcher? -->
<script type="text/babel">
export default {
  name: 'corral',
  props      : {
    title    : {type:String, default:""},
    nav      : {type:Array,  default(){return []}},
    value    : {type:String }
  },
  computed : {
    activeItem(){
      for ( let item of this.nav ){
        if( item.id == this.value )
          return item
      }
      // If for some reason, the value has changed to something that doesn't
      // match any of the items in the nav array, throw an error
      throw(`Corral Component : trying to activate set the active nav element to '${this.value}', but no item with that id was passed into the corral component.`)
    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .corral
    .left-nav
      .section-title {{ title }}
      .nav()
        .item(v-for="navItem in nav" v-bind:class="{active: activeItem.id == navItem.id}" @click="$emit('change',navItem.id)") {{ navItem.text }}
    .content
      .section-title {{ activeItem.text }}
      slot
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  @mixin pointer($color:#F1F5F7) {
    &:after{content: ""; width: 0; height: 0; border-style: solid; border-width: 0 15px 15px 15px; border-color: transparent transparent $color transparent; transform: rotate(90deg) scale(1); top: 8px; right: -22px; position: absolute;}
  }
  .corral          {display: flex; margin-top: 50px;
    .left-nav      {width:312px; margin-right:50px;
      .nav         {margin-left:-12px;
        .item      {height: 31px; margin-bottom: 8px; padding-left: 15px; color: #77AABD; font-style: italic; font-size: 16px; display: flex; align-items: center; cursor:pointer; font-weight: $bold; position: relative;
          &:hover  {background:white; @include pointer(white);}
          &.active {background: #F1F5F7; color: #034C66; @include pointer(); }
        }
      }
    }
    .content       {flex-grow: 1}
  }
</style>
