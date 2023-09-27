import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('../views/HomeMainContent.vue'),
  },
  {
    path: '/loyalty',
    component: () => import('../views/LoyaltyMainContent.vue'),
  },
  {
    path: '/folder/:id',
    component: () => import('../views/FolderPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
