import * as types from '../mutation';

const state = {
    user: {
        userName: '',
        userAge: 0
    },
    saveUser: {

    }
};

const getters = {
    userName: state => state.user.userName,
    userAge: state => state.user.userAge
};

const actions = {
    saveUser: ({commit}, user) => {
        commit(types.SAVE_USER, user)
    }
}

const mutations = {
    [types.SAVE_USER] (state, { res }) {
        state.saveUser = res
    }
};


export default{
    state,
    getters,
    actions,
    mutations
}
