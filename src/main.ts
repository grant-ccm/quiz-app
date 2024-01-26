import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/index.vue";
import RegistrationPage from "./pages/register/index.vue";
import PlayPage from "./pages/play/index.vue";
import { getUserFromStorage } from "./helpers/user";
import "primevue/resources/themes/lara-light-purple/theme.css";
import PrimeVue from "primevue/config";

const routes = [
  { path: "/", component: HomePage, name: "Home" },
  { path: "/register", component: RegistrationPage, name: "Register" },
  { path: "/play", component: PlayPage, name: "Play" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const userExists = getUserFromStorage();
  if (to.name !== "Register" && !userExists) return { name: "Register" };
  else if (to.name === "Register" && userExists) return { name: "Home" };
});

const app = createApp(App);
app.use(router);
app.use(PrimeVue);

app.mount("#app");
