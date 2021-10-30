<script>
  import { Route } from 'svelte-routing';
  import Login from "../components/Auth/Login/Login.svelte";
  import auth from './Auth'

  export let path;
  export let component;

  $: isAuthenticated = auth.isAuthenticated();

</script>

{#if isAuthenticated}
  <Route path={path} component={component} />
{:else}
  <Route path="/" component={Login} />
{/if}

