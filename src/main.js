import Vue from 'vue'
import VueResource from 'vue-resource'

import store from './store'
import router from './router'

Vue.use(VueResource)

new Vue({ store, router }).$mount('#app')
