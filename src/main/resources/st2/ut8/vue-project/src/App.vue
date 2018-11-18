<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light  bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <!--<li class="nav-item">-->
          <!--<router-link class="nav-link" to="/">Home</router-link>-->
          <!--</li>-->
          <!--<li class="nav-item ">-->
          <router-link tag="li" class="nav-item" exact to="/" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" exact to="/cars" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>
          <!--</li>-->
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  body {
    background: darkgray;
  }

</style>
