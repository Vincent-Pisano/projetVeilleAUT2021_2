<template>
  <div class="bootstrap-modal-no-jquery">
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Voulez-vous confirmer le refus de l'offre de stage ?
            </h5>
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
              @click="confirmActif"
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
import { URL_REFUSE_INTERNSHIP_OFFER } from "../../../utils/API";

export default {
  props: {
    internshipOffer: Object,
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
    confirmActif() {
      axios
        .post(`${URL_REFUSE_INTERNSHIP_OFFER}/${this.internshipOffer.id}`)
        .then(() => {
          this.errorMessage = "Confirmation du refus, vous allez être redirigé";
          this.btnDisabled = true;
          setTimeout(() => {
            this.closeModal();
            this.$router.push("/internshipOfferList/validation");
          }, 2000);
        })
        .catch(() => {
          this.errorMessage = "Erreur lors du refus de l'offre de stage...";
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