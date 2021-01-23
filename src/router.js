import Vue from 'vue'
import Router from 'vue-router'

import PagesWrapper from './views/PagesWrapper'

import pages from './views/pages'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/pages',
      component: PagesWrapper,
      children: pages
    },
    {
      path: '*',
      redirect: '/pages/1'
    }
  ]
})
