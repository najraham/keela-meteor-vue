import Vue from 'vue'
import { Meteor } from 'meteor/meteor'

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'
import Router from 'vue-router'

Meteor.startup(() => {
  Vue.use(Router)

  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('../imports/ui/components/Task.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../imports/ui/components/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../imports/ui/components/Register.vue')
      },
      {
        path: '/change-password',
        name: 'change-password',
        component: () => import('../imports/ui/components/ChangePassword.vue')
      },
    ]
  })

  new Vue({
    el: '#app',
    ...App,
    router,
  })
})
