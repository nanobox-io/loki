<script type="text/babel">
export default {
  name: 'app-info',
  props: {
    appName: {type: String, default: ""},
    renamePermission: {type: Boolean, default: false},
    providerName: {type: String, default:""},
    region: {type: String, default:""}
  },
  created: function() {
    this.currentName = this.appName;
  },
  data: function (){
    return {
      currentName: "",
      isEditing: false,
      oldName: ""
    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  div
    h2 App Info
    .error(v-for="error in errors") error.msg
    label(for='name') Name
    input(
      name='name'
      v-model='currentName'
      :disabled='renamePermission')
    .save-zone(v-if='currentName != appName')
      a.cancel(href="") Cancel
      button.save.lifecycle Save Changes
        //- checkmark svg here...
    label(for='provider') Provider
    input.disabled(name='provder' v-model='providerName' disabled)
    label(for='region') Region
    input.disabled(name='region' v-model='region' disabled)
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
</style>
