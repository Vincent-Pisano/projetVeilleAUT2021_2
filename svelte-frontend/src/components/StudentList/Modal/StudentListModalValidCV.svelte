<script>
  import Modal from "sv-bootstrap-modal";
  import { URL_DOWNLOAD_CV } from "../../../Utils/API";  
  import { createEventDispatcher } from 'svelte';
  import { URL_VALID_CV_ACTIVE } from "../../../Utils/API";
  import axios from "axios"

  const dispatch = createEventDispatcher();

  export let isOpen;
  export let currentStudent;
  let errorMessage = "";
  let btnDisabled = false;

  function validCV() {
    axios
      .post(`${URL_VALID_CV_ACTIVE}/${currentStudent.id}`)
      .then((response) => {
        setTimeout(() => {
            errorMessage = ""
            dispatch("valid-cv")
        }, 2000);
        errorMessage = "Confirmation de la validation";
      })
      .catch((error) => {
        errorMessage = "Erreur durant la validation du CV";
      });
  }
</script>

<Modal bind:open={isOpen}>
  <div class="modal-header">
    <h5 class="modal-title" style="color:black;">
      Voulez-vous confirmer le cv de {currentStudent.firstName} {currentStudent.lastName} ?
    </h5>
  </div>
  <div class="modal-body">
    <div class="row">
      <div class="col-sm-3">
        <button
          type="button"
          class="btn btn-lg btn-success"
          on:click={validCV}
          disabled={btnDisabled}>Oui</button
        >
      </div>
      <div class="col-sm-6">
        <a
          class="btn btn-lg btn-warning"
          href={`${URL_DOWNLOAD_CV}/${currentStudent.id}/${
            currentStudent.cvlist.filter((cv) => cv.isActive === true)[0].id
          }`}
          target="_blank"
          rel="noreferrer"
        >
          Télécharger
        </a>
      </div>

      <div class="col-sm-3">
        <button
          type="button"
          class="btn btn-lg btn-danger"
          on:click={() => (isOpen = false)}>Non</button
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
