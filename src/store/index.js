import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import modules from './modules'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

const state = {
}

const PersistedState = createPersistedState({
    paths: ['auth']
})

export default new Vuex.Store({
    state,
    getters,
    mutations,
    modules,
    plugins: [PersistedState]
})