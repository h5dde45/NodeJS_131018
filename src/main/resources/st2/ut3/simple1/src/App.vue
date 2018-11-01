<template>
  <div>
    <new-header>
      <h1>First component ..</h1>
    </new-header>
    <div class="container row ">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import newHeader from "./Header.vue"

  export default {
    data(){
      return {
        mode: "view"
      }
    },
    components: {
      newHeader
    },
    computed: {
      componentName(){
        return this.mode == "view" ? "ProductDetails" : "ProductAdd";
      }
    }
  }
</script>

<style>
  body {
    background: darkgray;
    padding: 20px;
  }

  h2 {
    color: red;
  }

</style>
