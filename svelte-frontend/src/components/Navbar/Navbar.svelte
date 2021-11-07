<script>
  import { isAuthenticated } from "../../services/Store";
  import auth from "../../services/Auth";
  import { navigate } from "svelte-routing";
  import { HOME_PAGE_URL as urls } from "../../utils/URL";
  import { Link } from "svelte-routing";

  //$: isTest = auth.isAuthenticated();

  const logout = () => {
    auth.logout(() => {
      navigate("/");
    });
  };
</script>

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
      {#if $isAuthenticated}
        <li class="nav-item">
          <Link class="nav-link" to="/home">Accueil</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" on:click={() => logout()}>Déconnexion</Link>
        </li>
      {:else}
        {#each urls as url}
          <li class="nav-item">
            <Link class="nav-link" to={url.link}>{url.name}</Link>
          </li>
        {/each}
      {/if}
    </ul>
  </div>
</nav>

<style>
</style>
