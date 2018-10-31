<template>
  <div>
    <h1>Product detail</h1>
    <h3>Title {{product.title}}</h3>
    <h3>Price ${{product.price}}</h3>
    <h3>Quantity {{product.gt}}</h3>
  </div>
</template>

<script>
  export default{
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
</script>


<style scoped>
  div {
    width: 500px;
    border: 1px solid red;
    border-radius: 10px;
    margin: 10px;
    background: grey;
    padding: 20px;
  }
</style>
