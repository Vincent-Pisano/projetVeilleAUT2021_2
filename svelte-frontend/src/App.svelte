

<script>
	import { Router, Route } from "svelte-routing";
	import ProtectedRoute from './services/ProtectedRoute.svelte';
	import Home from "./components/Home.svelte";
	import Login from "./components/Auth/Login/Login.svelte";
	import Subscribe from "./components/Auth/Subscribe/Subscribe.svelte";


	export let url = "";
  </script>
  
  <Router {url}>
	<div>
	  <Route path="/" component={Login} />
	  <Route path="/subscribe" component={Subscribe} />
	  <ProtectedRoute path="/home" component={Home} />
	  <Route component={Login} />
	</div>
  </Router>
  
  <style>
  </style>
  