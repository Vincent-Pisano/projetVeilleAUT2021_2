<script>
  import Modal from "sv-bootstrap-modal";
  import axios from "axios";
  import { currentUser } from "../../../services/Store";
  import auth from "../../../services/Auth";
  import { URL_ACTIVE_CV } from "../../../utils/API";

  export let isOpen;
  export let cv;
  let errorMessage = "";
  let btnDisabled = false;

  function activeCV() {
    axios
      .post(`${URL_ACTIVE_CV}/${$currentUser.id}/${cv.id}`)
      .then((response) => {
        errorMessage = "Confirmation de la mise à jour";
        btnDisabled = true;
        setTimeout(() => {
          isOpen = false;
          auth.updateUser(response.data);
        }, 2000);
      })
      .catch((error) => {
        errorMessage = "Erreur lors de la mise à jour de CV...";
      });
  }
</script>

<Modal bind:open={isOpen}>
  <div class="modal-header">
    <h5 class="modal-title" style="color:black;">
      Êtes-vous certain de mettre ce CV actif ?
    </h5>
  </div>
  <div class="modal-body">
    <div class="row">
      <div class="col">
        <button
          type="button"
          class="btn btn-danger"
          on:click={() => (isOpen = false)}>Non</button
        >
        <button
          type="button"
          class="btn btn-success"
          on:click={activeCV}
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
