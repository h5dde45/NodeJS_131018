<template>
  <div>
    <new-header>
      <h1>New text</h1>
    </new-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import NewHeader from "./Header.vue";

  export default {
    components: {
      NewHeader
    },
    data(){
      return {
        name: "asd",
        mode: 'view'
      }
    },
    computed: {
      componentName(){
        return this.mode == 'view' ? 'ProductDetails' : 'ProductAdd'
      }
    }
  }
</script>

<style>
  body {
    background: darkgray;
    padding: 50px;
  }

  h2 {
    color: red;
  }

</style>
