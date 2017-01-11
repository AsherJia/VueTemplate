import Promise from 'bluebird'
import {
    INCREMENT,
} from '../mutation-types'

const state = {
    count: 0
}

const mutations = {
    [INCREMENT](states) {
        states.count += 1
    }
}

const getters = {
    double: states => states.count * 2,
    third: states => states.count * 3,
    count: states => states.count
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const actions = {
    async increment({ dispatch, commit }) {
        commit(INCREMENT)
        await dispatch('testAsyncAction')
    },
    async testAsyncAction() {
        await sleep(2000)
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
