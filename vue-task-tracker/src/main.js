import { createApp } from "vue";
import App from "./App.vue"; // root app component
import router from "./Router/index";

createApp(App)
  .use(router) // extends the router into the app
  .mount("#app");
