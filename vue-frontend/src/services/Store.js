/* eslint-disable no-unused-vars */
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isAuthenticated: false,
      user: undefined,
      currentInternshipOffer: undefined
    };
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    user(state) {
      return state.user;
    },
    currentInternshipOffer(state) {
      return state.currentInternshipOffer;
    },
  },
  mutations: {
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setCurrentInternshipOffer(state, value) {
      state.currentInternshipOffer = value;
    },
  },
});

export default store;
