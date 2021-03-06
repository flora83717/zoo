import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Zone from "@/views/Zone";
import SZone from "@/views/SZone";
import AnimalData from "@/views/AnimalData";
import Mammals from "@/views/AnimalData/Mammals";
import Reptiles from "@/views/AnimalData/Reptiles";
import Amphibians from "@/views/AnimalData/Amphibians";
import Birds from "@/views/AnimalData/Birds";
import Osteichthyes from "@/views/AnimalData/Osteichthyes";
import AnimalDetail from "@/views/AnimalData/AnimalDetail";
import OnlineBuy from "@/views/OnlineBuy";
import Cart from "@/views/Cart";
import News from "@/views/News";
import Zoo from "@/views/Zoo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/zoo",
    component: Zoo,
    children: [
      {
        path: "home",
        component: Home,
      },
      {
        path: "zone",
        component: Zone,
      },
      {
        path: "szone/:id",
        component: SZone,
      },
      {
        path: "animalData",
        // redirect:"/animalData/mammals/A0001",
        component: AnimalData,
        children: [
          {
            path: "mammals/:id",
            component: Mammals,
            // children: [{ path: "animalDetail/:id", component: AnimalDetail }],
          },
          {
            path: "reptiles/:id",
            component: Reptiles,
            // children: [{ path: "animalDetail/:id", component: AnimalDetail }],
          },
          {
            path: "amphibians/:id",
            component: Amphibians,
            // children: [{ path: "animalDetail/:id", component: AnimalDetail }],
          },
          {
            path: "birds/:id",
            component: Birds,
            // children: [{ path: "animalDetail/:id", component: AnimalDetail }],
          },
          {
            path: "osteichthyes/:id",
            component: Osteichthyes,
            // children: [{ path: "animalDetail/:id", component: AnimalDetail }],
          },
        ],
      },
      {
        path: "onlineBuy",
        component: OnlineBuy,
      },
      {
        path: "cart",
        component: Cart,
      },
      {
        path: "news/:id",
        component: News,
      },
    ],
  },
  {
    path: "/",
    redirect: "/zoo/home",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
