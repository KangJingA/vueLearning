import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home";
import About from "../views/About";

// array of routes
// in each route, there is a view
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, // the component that you would like to render
  },
  {
    path: "/about",
    name: "About",
    component: About, // the component that you would like to render
  },
];

// create the router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
