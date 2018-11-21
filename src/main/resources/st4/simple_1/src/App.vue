<template>
  <div class="container">
    <new-header></new-header>
    <products @viwDetails="viewDetails"></products>
    <product-details :product="selectedProduct"></product-details>
  </div>
</template>

<script>
  import ProductsList from "./ProductsList.vue";
  import ProductDetails from "./ProductDetails.vue";
  import Header from "./Header.vue";

  export default {
    components: {
      "products": ProductsList,
      'newHeader': Header,
      ProductDetails
    },
    data(){
      return {
        selectedProduct: {}
      }
    },
    methods: {
      viewDetails(product){
        this.selectedProduct = product
      }
    }
  }
</script>

<style >
  body {
    background: darkgray;
    padding: 50px;
  }

</style>
