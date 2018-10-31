<template>
  <div>
    <new-header></new-header>
    <div class="container row ">
      <products></products>
      <product-details></product-details>
    </div>
  </div>
</template>

<script>
  import ProductsList from "./ProductsList.vue"
  import ProductDetails from "./ProductDetails.vue"
  import newHeader from "./Header.vue"

  export default {
    components: {
      newHeader,
      "products": ProductsList,
      ProductDetails
    }
  }
</script>

<style>
  body {
    background: darkgray;
    padding: 20px;
  }
</style>
