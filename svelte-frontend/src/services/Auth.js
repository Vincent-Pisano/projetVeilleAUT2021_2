import { isAuthenticated, currentUser } from "./Store";

class Auth {
  constructor() {
    if (sessionStorage.getItem("currentUser") !== null) {
      currentUser.update(() => JSON.parse(sessionStorage.getItem("currentUser")));
      isAuthenticated.update(isAuthenticated => isAuthenticated = true);
    } else {
      currentUser.update(() => undefined)
      isAuthenticated.update(isAuthenticated => isAuthenticated = false);
    }
  }

  login(cb, newUser) {
    currentUser.update(() => newUser);
    sessionStorage.setItem("currentUser", JSON.stringify(this.getUser()));
    isAuthenticated.update(isAuthenticated => isAuthenticated = true);
    cb();
  }

  logout(cb) {
    cb();
    sessionStorage.removeItem("currentUser");
    currentUser.update(() => undefined);
    isAuthenticated.update(isAuthenticated => isAuthenticated = false);
  }

  updateUser(newUser) {
    currentUser.update(() =>  newUser);
    sessionStorage.setItem("currentUser", JSON.stringify(this.getUser()));
  }

  getUser() {
    let $val
    currentUser.subscribe($ => $val = $)()
    return $val
  }

  isStudent() {
    return isAuthenticated ? this.getUser().username.startsWith("E") : false;
  }

  isSupervisor() {
    return isAuthenticated ? this.getUser().username.startsWith("S") : false;
  }

  isMonitor() {
    return isAuthenticated ? this.getUser().username.startsWith("M") : false;
  }

  isInternshipManager() {
    return isAuthenticated ? this.getUser().username.startsWith("G") : false;
  }
}

export default new Auth();
