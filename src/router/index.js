import { createRouter, createWebHashHistory } from 'vue-router'

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
    path: '/contact',
    name: 'ContactView',
    component: () => import('@/views/ContactView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
