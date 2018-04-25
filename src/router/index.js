import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import DrumMachine from '@/components/JsThirty/DrumMachine'

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
      name: 'DrumMachine',
      component: DrumMachine
    }
  ]
})
