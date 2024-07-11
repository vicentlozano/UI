import { createRouter, createWebHistory } from "vue-router";
import ButtonsView from './pages/ButtonsView.vue'
import CardViews from './pages/CardViews.vue'
import HeadersView from './pages/HeadersView.vue'
import AnimationsView from './pages/AnimationsView.vue'

const routes = [
  {
    path: "/",
    component: ButtonsView,
  },
  {
    path: "/buttons",
    component: ButtonsView,
  },
  {
    path: "/cards",
    component: CardViews,
  },
  {
    path: "/headers",
    component: HeadersView,
  },
  {
    path: "/animations",
    component: AnimationsView,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
