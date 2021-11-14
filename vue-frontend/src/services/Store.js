/* eslint-disable no-unused-vars */
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isAuthenticated: false,
      user: undefined
    };
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
    setUser(state, value) {
      state.user = value;
    },
  },
});

export default store;
