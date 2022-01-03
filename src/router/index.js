import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'InsuranceView',
    component: () => import('@/views/InsuranceView.vue'),
    meta: { title: 'Insurance - Check our offer - The Insurer' }
  },
  {
    path: '/claim-report',
    name: 'ClaimReportView',
    component: () => import('@/views/ClaimReportView.vue'),
    meta: { title: 'Claim report - Personal Details - The Insurer' }
  },
  {
    path: '/about-us',
    name: 'StaticPageView1',
    component: () => import('@/views/static/StaticPageView.vue'),
    meta: { title: 'About Us' }
  },
  {
    path: '/newsroom',
    name: 'StaticPageView2',
    component: () => import('@/views/static/StaticPageView.vue'),
    meta: { title: 'Newsroom' }
  },
  {
    path: '/careers',
    name: 'StaticPageView3',
    component: () => import('@/views/static/StaticPageView.vue'),
    meta: { title: 'Careers' }
  },
  {
    path: '/our-story',
    name: 'StaticPageView4',
    component: () => import('@/views/static/StaticPageView.vue'),
    meta: { title: 'Our story' }
  },
  {
    path: '/customer-stories',
    name: 'StaticPageView5.0',
    component: () => import('@/views/static/StaticPageView.vue'),
    meta: { title: 'Customer Stories' }
  },
  {
    path: '/contact',
    name: 'StaticPageView0',
    component: () => import('@/views/static/StaticPageView.vue'),
    meta: { title: 'Contact' }
  },
  {
    path: '/vacation-holiday',
    name: 'StaticPageView5',
    component: () => import('@/views/static/StaticPageView.vue'),
    meta: { title: 'Vacation / Holiday' }
  },
  {
    path: '/student-scholar',
    name: 'StaticPageView6',
    component: () => import('@/views/static/StaticPageView.vue'),
    meta: { title: 'Student / Scholar' }
  },
  {
    path: '/forms-library',
    name: 'StaticPageView7',
    component: () => import('@/views/static/StaticPageView.vue'),
    meta: { title: 'Forms Library' }
  },
  {
    path: '/find-doctor',
    name: 'StaticPageView8',
    component: () => import('@/views/static/StaticPageView.vue'),
    meta: { title: 'Find a Doctor' }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
