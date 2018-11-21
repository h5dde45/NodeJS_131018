<template>
  <div>
    <new-header></new-header>
    <greetings></greetings>
  </div>
</template>

<script>
  import Greetings from "./Greetings.vue";
  import Header from "./Header.vue";

  export default {
    components: {
      Greetings,
      'newHeader': Header
    }
  }
</script>

<style>
  body {
    background: darkgray;
    padding: 50px;
  }
</style>
