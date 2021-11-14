<script>
  import Modal from "sv-bootstrap-modal";
  import axios from "axios";
  import { currentUser } from "../../../services/Store";
  import auth from "../../../services/Auth";
  import { URL_DEPOSIT_CV } from "../../../utils/API";

  export let isOpen;
  let document = undefined;
  let errorMessage = "";
  let btnDisabled = false;

  function depositCV() {
    if (document !== undefined && document.type === "application/pdf") {
      let formData = new FormData();
      formData.append("document", document);
      axios
        .post(`${URL_DEPOSIT_CV}/${$currentUser.id}/`, formData)
        .then((response) => {
          auth.updateUser(response.data);
          errorMessage = "Confirmation du dépôt";
          btnDisabled = true;
          setTimeout(() => {
            errorMessage = "";
            btnDisabled = false;
            isOpen = false;
          }, 2000);
        })
        .catch((error) => {
          errorMessage = "Erreur lors du dépôt de CV...";
        });
    } else {
      errorMessage = "Erreur, Veuillez déposer un fichier sous format .pdf";
    }
  }
</script>

<Modal bind:open={isOpen}>
  <div class="modal-header">
    <h5 class="modal-title">Ajout d'un CV</h5>
  </div>
  <div class="modal-body">
    <div class="row">
      <div class="col">
        <form>
          <div class="form-group cont_file_form">
            <input
              type="file"
              accept="application/pdf"
              class="form-control input_file_form"
              on:input={(e) => (document = e.target.files[0])}
            />
          </div>
        </form>
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
    <div class="row">
      <div class="col-xs-12">
        <button
          type="button"
          class="btn btn-danger"
          on:click={() => (isOpen = false)}>Fermer</button
        >
        <button
          type="button"
          class="btn btn-success"
          on:click={depositCV}
          disabled={btnDisabled}>Confirmer le dépot</button
        >
      </div>
    </div>
  </div>
</Modal>

<style>
  .cont_file_form {
    width: 90%;
    margin: -5% 0% 5% 5%;
    padding: 10% 0px;
    opacity: 1;
    height: 5px;
    display: block;
    transition: all 0.5s;
  }

  .input_file_form {
    border: none;
    background-color: transparent;
    font-size: 20px;
    outline: none;
    transition: all 0.5s;
    border-radius: 0%;
    padding: 2% 2%;
  }

  .input_file_form:focus {
    border: none;
    background-color: transparent;
    box-shadow: 0px 2px 20px 2px rgba(192, 220, 223, 0.5);
  }
</style>
