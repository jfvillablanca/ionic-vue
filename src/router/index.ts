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
    path: '/menu',
    component: () => import('../views/MenuMainContent.vue'),
  },
  {
    path: '/menu/:id',
    component: () => import('../views/MenuItemDetail.vue'),
    props: true,
  },
  {
    path: '/checkout',
    component: () => import('../views/CheckoutView.vue'),
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
