import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueMeteorTracker)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
