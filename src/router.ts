import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "viewSelector",
    component: () => import("./components/ViewSelector/ViewSelector.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import("./components/Form/Form.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("./components/List/List.vue"),
  },
  {
    path: "/counter",
    name: "counter",
    component: () => import("./components/Counter/Counter.vue"),
  },
];

export const router = createRouter({ history: createWebHistory(), routes });
