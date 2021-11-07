<script>
  import { Route } from 'svelte-routing';
  import Login from "../components/Auth/Login/Login.svelte";
  import { isAuthenticated } from './Store'

  export let path;
  export let component;

</script>

{#if $isAuthenticated}
  <Route path={path} component={component} />
{:else}
  <Route path="/" component={Login} />
{/if}

