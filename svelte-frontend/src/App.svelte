<script>
  import { Router, Route } from "svelte-routing";
  import ProtectedRoute from "./services/ProtectedRoute.svelte";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Home from "./components/Home.svelte";
  import Login from "./components/Auth/Login/Login.svelte";
  import Subscribe from "./components/Auth/Subscribe/Subscribe.svelte";

  export let url = "";
</script>

<div class="App">
  <Router {url}>
	<Navbar />
    <div>
      <Route path="/" component={Login} />
      <Route path="/subscribe" component={Subscribe} />
      <ProtectedRoute path="/home" component={Home} />
      <Route component={Login} />
    </div>
  </Router>
</div>

<style>
	* {
  margin: 0px auto;
  padding: 0px;
  font-family: 'Open Sans', sans-serif;
}

.App {
  text-align: center;
  min-height: 110vh;
  height: 100%; 
  /* Rectangle 3: */ 
  background-image: linear-gradient(-87deg, #F2F5F6 0%, #DDE5E8 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
