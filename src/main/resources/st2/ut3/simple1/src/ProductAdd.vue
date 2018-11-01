<template>
  <div class="formAdd">
    <div class="form-group">
      <label>Tile {{$route.query.text}}</label>
      <input type="text" class="form-control"
             placeholder="Enter title.."
             v-model="product.title">
    </div>
    <div class="form-group">
      <label>Price</label>
      <input type="text" class="form-control"
             placeholder="Enter price.."
             v-model="product.price">
    </div>
    <div class="form-group">
      <label>Quantity</label>
      <input type="text" class="form-control"
             placeholder="Enter quantity.."
             v-model="product.qt">
    </div>
    <button class="btn btn-primary" type="submit"
            @click="addProduct">Add
    </button>
  </div>
</template>

<script>
  import ProductService from "./ProductService"

  export default{
    data(){
      return {
        product: {}
      }
    },
    methods: {
      addProduct(){
        ProductService.addProduct(this.product.title,
          this.product.price, this.product.qt);
        this.$router.push("/");
      }
    }
  }
</script>


<style scoped>
  div .formAdd {
    width: 450px;
    border: 1px solid green;
    border-radius: 10px;
    margin: 10px;
    background: grey;
    padding: 20px;
  }
</style>
