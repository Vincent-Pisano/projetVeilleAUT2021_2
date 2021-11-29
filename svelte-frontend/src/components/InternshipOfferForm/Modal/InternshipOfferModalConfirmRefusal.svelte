<script>
  import Modal from "sv-bootstrap-modal";
  import axios from "axios";
  import { URL_REFUSE_INTERNSHIP_OFFER } from "../../../utils/API";
  import { navigate } from "svelte-routing";

  export let isOpen;
  export let internshipOffer;
  let errorMessage = "";
  let btnDisabled = false;

  function refuseInternshipOffer() {
    axios
      .post(`${URL_REFUSE_INTERNSHIP_OFFER}/${internshipOffer.id}`)
      .then((response) => {
        errorMessage = "Confirmation du refus, vous allez être redirigé";
        btnDisabled = true;
        setTimeout(() => {
          navigate("/internshipOfferList/validation");
          isOpen = false;
        }, 2000);
      })
      .catch((error) => {
        errorMessage = "Erreur lors du refus de l'offre de stage...";
      });
  }
</script>

<Modal bind:open={isOpen}>
  <div class="modal-header">
    <h5 class="modal-title" style="color:black;">
      Voulez-vous confirmer le refus de l'offre de stage ?
    </h5>
  </div>
  <div class="modal-body">
    <div class="row">
      <div class="col">
        <button
          type="button"
          class="btn btn-danger mx-3"
          on:click={() => (isOpen = false)}>Non</button
        >
        <button
          type="button"
          class="btn btn-success mx-3"
          on:click={refuseInternshipOffer}
          disabled={btnDisabled}>Oui</button
        >
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <div class="row">
      <div class="col-xs-12">
        <p
          style={errorMessage.startsWith("Erreur")
            ? "color:red;"
            : "color:green;"}
        >
          {errorMessage}
        </p>
      </div>
    </div>
  </div>
</Modal>

<style>
</style>
