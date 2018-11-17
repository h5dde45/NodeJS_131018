<template>
  <div>
      <h2>{{title}}</h2>
    <input type="text" v-model="searchName">
      <ul>
        <li v-for="name of filteredNames">{{name}}</li>
      </ul>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        title: "fEord",
        names:['Ivan','Petr',"Dfgthg",'Xcv5tb'],
        searchName:""
      }
    },
    computed:{
        filteredNames(){
            return this.names.filter(name => name.toLowerCase().
            indexOf(this.searchName.toLowerCase()) != -1)
        }
    },
    filters:{
        lowercase(value){
            return value.toLowerCase();
        }
    }
  }
</script>

<style >
  body {
    background: darkgray;
  }

</style>
