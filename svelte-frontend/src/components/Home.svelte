<script>
  import { currentUser } from "../services/Store";
  import auth from "../services/Auth";
  import CVList from "./CVList/CVList.svelte";

  export let location;
  if (location == null) {
    console.error("an error occured during the routing");
  }
  
  let dateFormat = formatDate($currentUser.creationDate);
  let src = "images/user_icon.png";

  function formatDate(dateString) {
    let date = new Date(dateString);
    let dateFormatted = date.toISOString().split("T")[0];
    return dateFormatted;
  }
</script>

<div class="container cont_home mb-5">
  <div class="row cont_central">
    <div class="col-xs-12 col-lg-4">
      <div class="card bg-secondary text-white p-2" style="width: 18rem;">
        <div class="mx-2">
          <img class="card-img-top" {src} alt="user icon">
          <div class="card-body">
            <h5 class="card-title">Nom d'utilisateur: {$currentUser.username}</h5>
            <h5 class="card-text">Prénom: {$currentUser.firstName}</h5>
            <h5 class="card-text">Nom: {$currentUser.lastName}</h5>
            <h5 class="card-text">Adresse courriel: {$currentUser.email}</h5>
            <h5 class="card-text">Depuis {dateFormat}</h5>
          </div>
        </div>
      </div>
    </div>
    {#if auth.isStudent()}
      <div class="col-xs-12 col-lg-8">
        <CVList CVList={$currentUser.cvlist}/>
      </div>
    {/if}
  </div>
</div>

<style>
  .cont_central {
    padding: 2%;
    background-image: linear-gradient(-226deg, #ffffff 8%, #eef3f5 100%);
    border-radius: 8px;
    transition: all 0.5s;
    width: 95%;
    margin: 5% auto;
  }

  .card {
    margin: 1% auto;
  }
</style>
