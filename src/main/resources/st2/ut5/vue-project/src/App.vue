<template>
  <div id="app">
    <component is="Aut"></component>
    <!--<Aut></Aut>-->
    <!--<Reg></Reg>-->
    <!--<Header></Header>-->
    <!--<h1>{{title}}</h1>-->
    <!--<List :peaple="people" @message="displayMessage"></List>-->
  </div>
</template>

<script>
  import List from './components/List.vue'
  import Header from './components/Header.vue'
  import Aut from './components/Aut.vue'
  import Reg from './components/Reg.vue'

  export default {
    components: {
      List,
      Header,
      Reg,
      Aut
    },
    data(){
      return {
        title: "application",
        people: ["qwe", "asd", "zxc"]
      }
    },
    methods:{
      displayMessage(data){
          this.people.push(data);
      }
    }
  }
</script>

<style>
body{
  background: darkgray;
}
  div{
    display: flex;
  }
</style>
