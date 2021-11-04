import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'InsuranceView',
    component: () => import('@/views/InsuranceView.vue'),
  },
  {
    path: '/about-us',
    name: 'AboutUsView',
    component: () => import('@/views/AboutUsView.vue'),
  },
  {
    path: '/claim-report',
    name: 'ClaimReportView',
    component: () => import('@/views/ClaimReportView.vue'),
  },
  {
    path: '/about-us',
    name: 'ContactView',
    component: () => import('@/views/ContactView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router
