import Promise from 'bluebird'
import {
    INCREMENT
} from '../mutation-types'

const state = {
    count: 0
}

const mutations = {
    [INCREMENT](sate, payload) {
        state.count++
    }
}

const getters = {
    double: (state, getters) => {
        return state.count * 2
    }
}

const actions = {
    async increment({dispatch, commit}) {
        commit(INCREMENT)
        await dispatch('testAsyncAction')
    },
    async testAsyncAction({ dispatch, commit }) {
        await sleep(2000)
        console.log('Test Async Action~~~')
    }
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default {
    state,
    mutations,
    getters,
    actions
}
