<template>
  <div class="bootstrap-modal-no-jquery">
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
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
                      @input="(e) => (document = e.target.files[0])"
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
                  :style="
                    errorMessage.startsWith('Erreur')
                      ? 'color:red;'
                      : 'color:green;'
                  "
                >
                  {{errorMessage}}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <button
                  type="button"
                  class="btn btn-danger mx-1"
                  @click="closeModal"
                >
                  Fermer
                </button>
                <button
                  type="button"
                  class="btn btn-success mx-1"
                  @click="confirmDeposit"
                  :disabled="btnDisabled"
                >
                  Confirmer le dépôt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import auth from "../../../services/Auth";
import { URL_DEPOSIT_CV } from "../../../utils/API";

export default {
    data() {
    return {
      document: undefined,
      errorMessage: "",
      btnDisabled: false,
      currentUser: auth.getUser()
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal-event");
    },
    confirmDeposit() {
      if (this.document !== undefined && this.document.type === "application/pdf") {
      let formData = new FormData();
      formData.append("document", this.document);
      axios
        .post(`${URL_DEPOSIT_CV}/${this.currentUser.id}/`, formData)
        .then((response) => {
          auth.updateUser(response.data);
          this.errorMessage = "Confirmation du dépôt";
          this.btnDisabled = true;
          setTimeout(() => {
            this.errorMessage = "";
            this.btnDisabled = false;
            this.closeModal()
          }, 2000);
        })
        .catch(() => {
          this.errorMessage = "Erreur lors du dépôt de CV...";
        });
    } else {
      this.errorMessage = "Erreur, Veuillez déposer un fichier sous format .pdf";
    }
    },
  },
};
</script>

<style scoped>
/* Override default value of 'none' */
.modal {
  display: block;
  color: black;
  background-color: rgba(0, 0, 0, 0.55);
}

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