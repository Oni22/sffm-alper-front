import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import CurrentFaults from '../views/CurrentFaults.vue'
import CurrentPDCA from '../views/CurrentPDCA.vue'
import NewFailureEntry from '../views/NewFailureEntry.vue'
import NewFailure from '../views/NewFailure.vue'
import NewPDCA from '../views/NewPDCA.vue'
import FailureAnalyze from '../views/FailureAnalyze.vue'
import FailureList from '../views/FailureList.vue'
import AppInformation from '../views/AppInformation.vue'
import { Routes } from './utils'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: Routes.CURRENT_FAULT,
        name: 'CurrentFaults',
        component: CurrentFaults
      },
      {
        path: Routes.NEW_FAILURE,
        name: 'NewFailure',
        component: NewFailure
      },
      {
        path: Routes.FAILURE_ANALYZE,
        name: 'FailureAnalyze',
        component: FailureAnalyze
      },
      {
        path: Routes.FAILURE_LIST,
        name: 'FailureList',
        component: FailureList
      },
      {
        path: Routes.APP_INFO,
        name: 'AppInformation',
        component: AppInformation
      },
      {
        path: Routes.NEW_FAILURE_ENTRY,
        name: 'NewFailureEntry',
        component: NewFailureEntry
      },
      {
        path: Routes.NEW_PDCA,
        name: 'NewPDCA',
        component: NewPDCA
      },
      {
        path: Routes.CURRENT_PDCA,
        name: 'CurrentPDCA',
        component: CurrentPDCA
      },
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
