import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Zone from "@/views/Zone";
import SZone from "@/views/SZone";
import AnimalData from "@/views/AnimalData";
import OnlineBuy from "@/views/OnlineBuy";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/zone",
    component: Zone,
  },
  {
    path: "/szone/:id",
    component: SZone,
  },
  {
    path: "/animalData",
    component: AnimalData,
  },
  {
    path: "/onlineBuy",
    component: OnlineBuy,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
