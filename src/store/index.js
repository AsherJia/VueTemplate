import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules,
    strict: process.env.NODE_ENV !== 'production', // 是否开启严格模式
    plugins: [createLogger()]
})

if (module.hot) {
    // 使 actions 和 mutations 成为可热重载模块
    module.hot.accept(['./modules'], () => {
        // 获取更新后的模块
        // 因为 babel 6 的模块编译格式问题，这里需要加上 .default
        const newMutations = require('./modules').default
        // 加载新模块
        store.hotUpdate({
            mutations: newMutations
        })
    })
}

export default store
