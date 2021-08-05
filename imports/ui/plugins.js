import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import FlashMessage from '@smartweb/vue-flash-message';

import moment from 'moment'

Vue.filter('formatDate', function(value) {
    if (value) {
    return moment(String(value)).format('YYYY-MM-DD')
    }
})

Vue.use(FlashMessage);

Vue.use(VueMeteorTracker)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
