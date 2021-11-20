<script>
  import { Router, Route } from "svelte-routing";
  import ProtectedRoute from "./services/ProtectedRoute.svelte";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Home from "./components/Home.svelte";
  import Login from "./components/Auth/Login/Login.svelte";
  import Subscribe from "./components/Auth/Subscribe/Subscribe.svelte";
  import StudentListValidCV from "./components/StudentList/List/StudentListValidCV.svelte";
  import InternshipOfferForm from "./components/InternshipOfferForm/InternshipOfferForm.svelte";
  import InternshipOfferListValidation from "./components/InternshipOfferList/List/InternshipOfferListValidation.svelte";

  export let url = "";

</script>

<div class="App">
  <Router {url}>
	<Navbar />
    <div>
      <Route path="/" component={Login} />
      <Route path="/subscribe" component={Subscribe} />
      <ProtectedRoute path="/home" component={Home} />
      <ProtectedRoute path="/studentList/validation/cv" component={StudentListValidCV} />
      <ProtectedRoute path="/internshipOffer/form/deposit" component={InternshipOfferForm} />
      <ProtectedRoute path="/internshipOffer/form/validation" component={InternshipOfferForm} />
      <ProtectedRoute path="/internshipOfferList/validation" component={InternshipOfferListValidation} />
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
  /* Rectangle 3: */ 
  background-image: linear-gradient(-87deg, #F2F5F6 0%, #DDE5E8 100%);
  background-repeat:repeat-y;
  background-attachment: fixed;
}
</style>
