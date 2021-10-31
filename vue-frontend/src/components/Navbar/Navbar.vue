<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 m-0">
    <span>Gestionnaire de stage</span>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarcontent"
      aria-controls="navbarcontent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse ml" id="navbarcontent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to={{url.LOGIN}}>Connexion</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="{url.SUBSCRIBE}"
            >Inscription</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import URL from "../../utils/URL";

export default {
    name:'Navbar'
};
</script>