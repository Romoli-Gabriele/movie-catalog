import {
  createRouter,
  createWebHistory
} from 'vue-router'


const routes = [{
    path: '/:catchAll(.*)*',
    name: "pageNotFound",
    component: () => import( /* webpackChunkName: "pageNotFound" */ '../views/pageNotFound.vue'),
  },
  {
    path: '/success/:type?/:id?',
    name: "success",

    component: () => import( /* webpackChunkName: "RegisterPage" */ '../views/RegisterPage.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/TVSeries',
    name: 'Series',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "Series" */ '../views/Series.vue'),
  },
  {
    path: '/details/:id/:type',
    name: 'Details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "Details" */ '../views/Details.vue'),

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",

  scrollBehavior: () => ({
    top: 0,
    behavior: "smooth"
  })
})

export default router