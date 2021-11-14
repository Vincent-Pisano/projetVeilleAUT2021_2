<template>
  <div class="bootstrap-modal-no-jquery">
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Êtes-vous certain de supprimer ce CV ?</h5>
          </div>
          <div class="modal-body">
            <button
              type="button"
              class="btn btn-danger mx-3"
              @click="closeModal"
            >
              Non
            </button>
            <button
              type="button"
              class="btn btn-success mx-3"
              @click="confirmDelete"
            >
              Oui
            </button>
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
                  {{ errorMessage }}
                </p>
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
import { URL_DELETE_CV } from "../../../utils/API";

export default {
  props: {
    cv: Object,
  },
  data() {
    return {
      errorMessage: "",
      btnDisabled: false,
      currentUser: auth.getUser(),
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal-event");
    },
    confirmDelete() {
      axios
        .delete(`${URL_DELETE_CV}/${this.currentUser.id}/${this.cv.id}`)
        .then((response) => {
          this.errorMessage = "Confirmation de la suppression";
          this.btnDisabled = true;
          setTimeout(() => {
            auth.updateUser(response.data);
            this.closeModal();
          }, 2000);
        })
        .catch(() => {
          this.errorMessage = "Erreur lors de la suppression de CV...";
        });
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

.modal-dialog {
  margin-top: 7%;
}
</style>