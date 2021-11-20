<script>
  import { TITLE_INTERNSHIP_OFFER_LIST_VALIDATION } from "../../../Utils/TITLE";
  import { URL_GET_ALL_INTERNSHIP_OFFERS_TO_VALIDATE } from "../../../Utils/API";
  import axios from "axios";
  import { navigate } from "svelte-routing";
  import InternshipOfferList from "../InternshipOfferList.svelte";
  
  export let location;
  if (location == null) {
    console.error("an error occured during the routing");
  }

  let title = TITLE_INTERNSHIP_OFFER_LIST_VALIDATION;
  let internshipOffers = [];
  let currentInternshipOffer = {};
  let errorMessage = "";

  axios
    .get(URL_GET_ALL_INTERNSHIP_OFFERS_TO_VALIDATE)
    .then((response) => {
      internshipOffers = response.data;
    })
    .catch((error) => {
      errorMessage = "Erreur! Aucune offre de stage à valider actuellement";
    });

  function changeCurrentInternshipOffer(event) {
    currentInternshipOffer = event.detail;
    navigate("/internshipOffer/form/validation", {state: currentInternshipOffer});
  }
</script>

<InternshipOfferList
  {title}
  {internshipOffers}
  {errorMessage}
  on:click={changeCurrentInternshipOffer}
/>
/>

<style>
</style>
