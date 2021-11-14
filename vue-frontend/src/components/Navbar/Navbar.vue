<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 m-0">
    <span>Gestionnaire de stage</span>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarcontent"
      aria-controls="navbarcontent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse ml" id="navbarcontent">
      <ul class="navbar-nav">
        <span v-if="isNotAuthenticated">
          <li class="nav-item" :key="url.key" v-for="url in base_url">
            <router-link class="nav-link" :to="{ path: url.link }">
              {{ url.name }}
            </router-link>
          </li>
        </span>
        <span v-else>
          <li class="nav-item">
            <DropdownNavbar :urls="urls" />
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout">Déconnexion</a>
          </li>
        </span>
      </ul>
    </div>
  </nav>
</template>

<script>
import {
  HOME_PAGE_URL,
  STUDENT_URL,
  SUPERVISOR_URL,
  MONITOR_URL,
  INTERNSHIP_MANAGER_URL,
} from "../../utils/URL";
import auth from "../../services/Auth";
import DropdownNavbar from "./DropdownNavbar.vue"

export default {
  name: "Navbar",
  components: {
    DropdownNavbar
  },
  data() {
    return {
      base_url: HOME_PAGE_URL
    };
  },
  methods: {
    logout() {
      auth.logout(() => this.$router.push("/"));
    },
  },
  computed: {
    isNotAuthenticated() {
      return !this.$store.getters.isAuthenticated;
    },
    urls() {
      return this.$store.getters.isAuthenticated
        ? auth.isStudent()
          ? STUDENT_URL
          : auth.isSupervisor()
          ? SUPERVISOR_URL
          : auth.isMonitor()
          ? MONITOR_URL
          : auth.isInternshipManager()
          ? INTERNSHIP_MANAGER_URL
          : []
        : []
    },
  },
};
</script>

<style>
.navbar-nav {
  margin: 0px;
}

a {
  cursor: pointer;
}
</style>