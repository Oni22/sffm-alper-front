import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import CurrentFaults from '../views/CurrentFaults.vue'
import NewFailure from '../views/NewFailure.vue'
import FailureAnalyze from '../views/FailureAnalyze.vue'
import FailureList from '../views/FailureList.vue'
import AppInformation from '../views/AppInformation.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/current-faults',
        name: 'CurrentFaults',
        component: CurrentFaults
      },
      {
        path: '/new-failure',
        name: 'NewFailure',
        component: NewFailure
      },
      {
        path: '/failure-analyze',
        name: 'FailureAnalyze',
        component: FailureAnalyze
      },
      {
        path: '/failure-list',
        name: 'FailureList',
        component: FailureList
      },
      {
        path: '/app-information',
        name: 'AppInformation',
        component: AppInformation
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
