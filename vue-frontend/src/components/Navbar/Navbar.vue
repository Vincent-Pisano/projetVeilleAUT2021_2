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
        <div v-if="isNotAuthenticated">
          <li class="nav-item" :key="url.key" v-for="url in urls">
            <router-link class="nav-link" :to="{ path: url.link }">
              {{ url.name }}
            </router-link>
          </li>
        </div>
        <div v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Accueil</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout"
              >Déconnexion</a
            >
          </li>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
import { HOME_PAGE_URL } from "../../utils/URL";
import auth from "../../services/Auth";

export default {
  name: "Navbar",
  data() {
    return {
      urls: HOME_PAGE_URL
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
     }
   }
};
</script>

<style>
.navbar-nav {
  margin: 0px;
}

.navbar-nav div {
  display: inline;
}

a {
  cursor: pointer;
}


</style>