<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{index}} {{product.title}}</h4>
      <p class="card-text">{{product.gt}} items for {{product.price}}</p>
      <a href="#" class="btn btn-primary" @click="viwDetails">View details</a>
    </div>
  </div>
</template>

<script>
  import ProductService from "./ProductService";

  export default {
    props: {
      product: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
      },
    },
    data() {
      return {
        product: {},
        index: 1
      }
    },
    methods: {
      viwDetails(){
//        ProductService.viewDetails(this.product.id);
        this.$router.push('/detail/'+this.product.id)

      }
    }
  }
</script>

<style scoped>
  .card {
    width: 300px;
    border: 1px solid red;
    border-radius: 10px;
    margin: 10px;
  }
</style>
