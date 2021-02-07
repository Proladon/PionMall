import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: "",
        logged: false,
        apiUrl: ""
    },
    mutations: {
        UPDATE_API(state, url) {
            state.apiUrl = url;
        },
        UPDATE_USER(state, data) {
            state.user = data;
        },
        UPDATE_LOGGED_STATE(state, data) {
            state.logged = data;
        },
    },
    actions: {},
    modules: {},
    plugins: [createPersistedState()],
});
