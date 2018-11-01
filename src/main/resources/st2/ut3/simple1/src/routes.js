import ProductsList from "./ProductsList.vue";
import ProductDetails from "./ProductDetails.vue";
import ProductAdd from "./ProductAdd.vue";

export const routes = [
  {
    path: "/",
    component: ProductsList,
    name:"home"
  },
  {
    path: "/add",
    component: ProductAdd,
  },
  {
    path: "/detail/:id",
    component: ProductDetails,
    name:"product-details",
    props: {staticText:"some text"}
  },
  {
    path: "*",
    component: ProductsList
  }
];
