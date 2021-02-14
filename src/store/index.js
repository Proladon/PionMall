import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: "",
        logged: false,
        apiUrl: "",
        cart:[],
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

        ADD_CART(state, products){
            state.cart.push(products)
        },
        DELETE_FROM_CART(state, itemIndex){
            state.cart.splice(itemIndex, 1)
        }
    },
    actions: {},
    modules: {},
    plugins: [createPersistedState()],
});
