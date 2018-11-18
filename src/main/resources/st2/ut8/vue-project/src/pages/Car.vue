<template>
  <div>
    <h1>car id {{id}}</h1>
    <button class="btn" @click="goBack">Back</button>
    <br>
    <router-link tag="button" class="btn btn-info mt-2"
                 :to="{name:'carFull', params:{id: id}, query:{name:'ford', year:2111}}">
      Info
    </router-link>
    <hr>
    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        id: this.$route.params['id']
      }
    },
    watch: {
      $route(toR, fromR){
        this.id = toR.params['id']
      }
    },
    methods: {
      goBack(){
        this.$router.push('/cars')
      }
    }
  }
</script>

<style>
</style>
