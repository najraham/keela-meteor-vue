import Vue from "vue";
import { Meteor } from "meteor/meteor";

import "../imports/ui/plugins";

import App from "../imports/ui/App.vue";
import Router from "vue-router";
import routes from "./router"

Meteor.startup(() => {
  Vue.use(Router);

  const router = new Router({
    mode: "history",
    routes
  });

  router.beforeEach((to, from, next) => { 
    if (to.matched.some(record => record.meta.conditionalRoute)) {
        if (!Meteor.userId()) { 
            next({ path: '/login'}) 
          } else { 
            next()
        } 
    } else { 
        next()
    } 
  })

  new Vue({
    el: "#app",
    ...App,
    router,
    mode: "history",
  });
});
