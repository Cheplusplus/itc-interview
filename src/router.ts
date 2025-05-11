import { createRouter, createMemoryHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "viewSelector",
    component: () => import("./components/ViewSelector.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import("./components/Form.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("./components/List.vue"),
  },
  {
    path: "/counter",
    name: "counter",
    component: () => import("./components/Counter.vue"),
  },
];

export const router = createRouter({ history: createMemoryHistory(), routes });
