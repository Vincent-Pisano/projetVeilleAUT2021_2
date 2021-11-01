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
      <ul class="navbar-nav" :key="url.key" v-for="url in urls">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: url.link }">
            {{ url.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { HOME_PAGE_URL } from "../../utils/URL";

export default {
  name: "Navbar",
  computed: {
    urls() {
      return HOME_PAGE_URL();
    },
  },
};
</script>

<style>
.navbar-nav{
    margin: 0px
}
</style>