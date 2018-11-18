import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Cars from "./pages/Cars.vue";
import Car from "./pages/Car.vue";
import CarFull from "./pages/CarFull.vue";

export default new VueRouter({
  routes: [
    {
      path: '', //http://localhost:8080
      component: Home
    },
    {
      path: '/cars', //http://localhost:8080/cars
      component: Cars
    },
    {
      path: '/car/:id', //http://localhost:8080/car/id
      component: Car,
      children: [
        {
          path: 'full', //http://localhost:8080//car/4/full
          component: CarFull,
          name: 'carFull'
        },
      ]
    }
  ],
  mode: 'history'
})
