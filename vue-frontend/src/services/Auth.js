/* eslint-disable no-unused-vars */
import store from "./Store";

class Auth {
  constructor() {
    if (sessionStorage.getItem("user") !== null && sessionStorage.getItem("user") !== "undefined") {
      store.commit('setUser', JSON.parse(sessionStorage.getItem("user")))
      store.commit('setIsAuthenticated', true)
    } else {
      store.commit('setUser', undefined)
      store.commit('setIsAuthenticated', false)
    }
  }

  login(cb, user) {
    store.commit('setUser', user)
    sessionStorage.setItem("user", JSON.stringify(user));
    store.commit('setIsAuthenticated', true)
    cb();
  }

  logout(cb) {
    store.commit('setUser', undefined)
    sessionStorage.removeItem("user");
    store.commit('setIsAuthenticated', false)
    cb();
  }

  getUser() {
    return store.getters.user;
  }

  updateUser(user) {
    store.commit('setUser', user)
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  isStudent() {
    return store.getters.isAuthenticated ? store.getters.user.username.startsWith("E") : false;
  }

  isSupervisor() {
    return store.getters.isAuthenticated ? store.getters.user.username.startsWith("S") : false;
  }

  isMonitor() {
    return store.getters.isAuthenticated ? store.getters.user.username.startsWith("M") : false;
  }

  isInternshipManager() {
    return store.getters.isAuthenticated ? store.getters.user.username.startsWith("G") : false;
  }
}

export default new Auth();
