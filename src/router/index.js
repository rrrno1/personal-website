import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Skills from "../views/Skills.vue";
import Education from "../views/Education.vue";
import Experience from "../views/Experience.vue";
import Projects from "../views/Projects.vue";
import Hobbies from "../views/Hobbies.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/education",
    name: "Education",
    component: Education,
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/hobbies",
    name: "Hobbies",
    component: Hobbies,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
