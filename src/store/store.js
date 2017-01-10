import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user
    },
    strict: process.env.NODE_ENV !== 'production', //是否开启严格模式
});


export default store
