<template>
  <div>
    <new-header>
      <h1>New text</h1>
      <span>second part -- {{name}}</span>
      <h2 slot="subtitle">New text2</h2>
      <span slot="subtitle">3 part</span>
    </new-header>
    <div class="container">
      <products></products>
      <div>
        <span @click="mode=(mode =='view' ? 'add' : 'view')">{{mode}}</span>
        <keep-alive>
          <component :is="componentName"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductsList from "./ProductsList.vue";
  import ProductDetails from "./ProductDetails.vue";
  import Header from "./Header.vue";
  import ProductAdd from "./ProductAdd.vue";

  export default {
    components: {
      "products": ProductsList,
      'newHeader': Header,
      ProductDetails,
      ProductAdd
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
