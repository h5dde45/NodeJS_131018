<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{index}}. {{product.title}}</h4>
      <p class="card-text">{{product.qt}} items for {{product.price}}</p>
      <a href="#" class="btn btn-success"
         @click="viewDetailsClicked">Vue details</a>
    </div>
  </div>
</template>

<script>
  import ProductService from "./ProductService"

  export default{
    props: {
      product: {
        type: Object,
        required: true
      },
      index: {
        type: Number
      }
    },
    data() {
      return {}
    },
    methods: {
      viewDetailsClicked(){
//        this.$router.push("/detail/" + this.product.id);
        this.$router.push({name:"product-details", params:{id:this.product.id}});
      }
    }
  }
</script>

<style>
  div.card {
    width: 450px;
    border: 1px solid red;
    border-radius: 10px;
    margin: 10px;
  }
</style>
