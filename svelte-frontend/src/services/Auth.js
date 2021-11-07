import { isAuthenticated } from "./Store";

class Auth {
  constructor() {
    if (sessionStorage.getItem("user") !== null) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
      isAuthenticated.update(isAuthenticated => isAuthenticated = true);
    } else {
      this.user = undefined;
      isAuthenticated.update(isAuthenticated => isAuthenticated = false);
    }
  }

  login(cb, user) {
    this.user = user;
    sessionStorage.setItem("user", JSON.stringify(this.user));
    isAuthenticated.update(isAuthenticated => isAuthenticated = true);
    cb();
  }

  logout(cb) {
    sessionStorage.removeItem("user");
    this.user = undefined;
    isAuthenticated.update(isAuthenticated => isAuthenticated = false);
    cb();
  }

  updateUser(user) {
    this.user = user;
    sessionStorage.setItem("user", JSON.stringify(this.user));
  }

  isStudent() {
    return this.authenticated ? this.user.username.startsWith("E") : false;
  }

  isSupervisor() {
    return this.authenticated ? this.user.username.startsWith("S") : false;
  }

  isMonitor() {
    return this.authenticated ? this.user.username.startsWith("M") : false;
  }

  isInternshipManager() {
    return this.authenticated ? this.user.username.startsWith("G") : false;
  }
}

export default new Auth();
