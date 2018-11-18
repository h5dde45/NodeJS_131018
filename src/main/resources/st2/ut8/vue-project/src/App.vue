<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">Car name</label>
      <input type="text" class="form-control"
             id="name" v-model.trim="carName">
    </div>
    <div class="form-group">
      <label for="year">Car year</label>
      <input type="text" class="form-control"
             id="year" v-model.number="carYear">
    </div>
    <button class="btn btn-success" @click="createCar">Create car</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        carName: "",
        carYear: 2010
      }
    },
    methods: {
      createCar(){
        const car = {
          name: this.carName,
          year: this.carYear
        };
        this.$http.post('http://localhost:3000/cars', car)
          .then(response=>{
              return response.json()
          })
          .then(newCar => {
              console.log(newCar)
          })
      }
    }
  }
</script>

<style>
  body {
    background: darkgray;
  }

</style>
