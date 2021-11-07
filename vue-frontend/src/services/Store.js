/* eslint-disable no-unused-vars */
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isAuthenticated: false,
    };
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
  mutations: {
    setIsAuthenticated(state, value) {
      console.log("changement")
      state.isAuthenticated = value;
    },
  },
});

export default store;
