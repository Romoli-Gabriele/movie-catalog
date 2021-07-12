import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import pageNotFound from '../views/pageNotFound.vue'


const routes = [
  {
    path: '/:catchAll(.*)*',
    name: "pageNotFound",
    component: pageNotFound
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/TVSeries',
    name: 'Series',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Series.vue'),
  },
  {
    path: '/details/:id/:type', 
    name: 'Details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue'), 
    props:{
      id:{
        type: Number,
        required: true,
      },
      type:{
        type: String,
        required: true,
      },
      language:{
        type: String,
        required: true,
      }
    }
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router
