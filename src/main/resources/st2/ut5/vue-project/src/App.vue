<template>
  <div id="app">
    <Slot>
      <h2 slot="title">title for slot</h2>
      <p slot="text">text for slot</p>
    </Slot>
  </div>
</template>

<script>
  import Slot from "./components/Slot.vue"

  export default {
    components: {
      Slot
    },
    data(){
      return {}
    }
  }
</script>

<style>
  body {
    background: darkgray;
  }
</style>
