<template>
  <div>
    <new-header></new-header>
    <div class="container row ">
      <products @viewDetailsList="viewDetailsApp"></products>
      <product-details :product="selectedProduct"></product-details>
    </div>
  </div>
</template>

<script>
  import ProductsList from "./ProductsList.vue"
  import ProductDetails from "./ProductDetails.vue"
  import newHeader from "./Header.vue"

  export default {
    data(){
      return {
        selectedProduct: {}
      }
    },
    components: {
      newHeader,
      "products": ProductsList,
      ProductDetails
    },
    methods: {
      viewDetailsApp(product){
        this.selectedProduct = product;
      }
    }
  }
</script>

<style>
  body {
    background: darkgray;
    padding: 20px;
  }
</style>
