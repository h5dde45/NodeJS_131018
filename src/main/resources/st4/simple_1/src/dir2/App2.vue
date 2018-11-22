<template>
  <div id="app">
    <h1 class="mb-3">New text - {{name}}</h1>
    <div class="container">
      <users></users>
      <products></products>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import Users from './components/users.vue'
import Products from './components/products.vue'

  export default {
    data(){
      return {
        name: "asd",
      }
    },
    components: {
      Users,
      Products
    }
  }
</script>

<style>
  body {
    background: darkgray;
    padding: 50px;
  }

  h1 {
    text-align: center;
  }
</style>
