/* eslint-disable no-unused-vars */
import store from "./Store";

class Auth {
  constructor() {
    if (sessionStorage.getItem("user") !== null && sessionStorage.getItem("user") !== "undefined") {
      this.user = JSON.parse(sessionStorage.getItem("user"));
      store.commit('setIsAuthenticated', true)
    } else {
      this.user = undefined;
      store.commit('setIsAuthenticated', false)
    }
  }

  login(cb, user) {
    this.user = user;
    sessionStorage.setItem("user", JSON.stringify(this.user));
    store.commit('setIsAuthenticated', true)
    cb();
  }

  logout(cb) {
    this.user = undefined;
    sessionStorage.removeItem("user");
    store.commit('setIsAuthenticated', false)
    cb();
  }

  updateUser(user) {
    this.user = user;
    sessionStorage.setItem("user", JSON.stringify(this.user));
  }

  isStudent() {
    return store.getters.isAuthenticated ? this.user.username.startsWith("E") : false;
  }

  isSupervisor() {
    return store.getters.isAuthenticated ? this.user.username.startsWith("S") : false;
  }

  isMonitor() {
    return store.getters.isAuthenticated ? this.user.username.startsWith("M") : false;
  }

  isInternshipManager() {
    return store.getters.isAuthenticated ? this.user.username.startsWith("G") : false;
  }
}

export default new Auth();
