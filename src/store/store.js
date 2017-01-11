import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import counter from './modules/counter'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        counter
    },
    strict: process.env.NODE_ENV !== 'production', //是否开启严格模式
    plugins: [createLogger()]
});

export default store
