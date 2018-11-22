<template>
<div class="userd p-2">
  <div>
    <h2>{{header}}</h2>
  </div>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Имя</th>
      <th scope="col">Фамилия</th>
      <th scope="col">Username</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default{
    data(){
        return {
            data:"",
          header:"Users"
        }
    }
}
</script>

<style scoped>
  .userd{
    border: 1px solid red;
    border-radius: 10px;
    width: 500px;
    float: left;
  }
</style>
