import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import DayOne from '@/components/JsThirty/DayOne'
import DayFifteen from '@/components/JsThirty/DayFifteen'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/drum',
      name: 'DayOne',
      component: DayOne
    },
    {
      path: '/local-tapas',
      name: 'DayFifteen',
      component: DayFifteen
    }
  ]
})
