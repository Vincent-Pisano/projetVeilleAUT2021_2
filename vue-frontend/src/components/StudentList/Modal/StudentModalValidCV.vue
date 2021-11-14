<template>
  <div class="bootstrap-modal-no-jquery">
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Voulez-vous confirmer le cv de {{ student.firstName }}
              {{ student.lastName }} ?
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
            <a
              class="btn btn-warning mx-3"
              :href="`${url_download}/${student.id}/${
                student.cvlist.filter((cv) => cv.isActive === true)[0].id
              }`"
              target="_blank"
              rel="noreferrer"
            >
              Télécharger
            </a>
            <button
              type="button"
              class="btn btn-success mx-3"
              @click="confirmValid"
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
import { URL_DOWNLOAD_CV, URL_VALID_CV_ACTIVE } from "../../../utils/API";
  import axios from "axios"

export default {
  props: {
    student: Object,
  },
  data() {
    return {
      errorMessage: "",
      btnDisabled: false,
      url_download: URL_DOWNLOAD_CV,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal-event");
    },
    confirmValid() {
        console.log(`${URL_VALID_CV_ACTIVE}/${this.student.id}`)
      axios
      .post(`${URL_VALID_CV_ACTIVE}/${this.student.id}`)
      .then(() => {
        setTimeout(() => {
            this.errorMessage = ""
            this.$emit("valid-cv")
        }, 2000);
        this.errorMessage = "Confirmation de la validation";
      })
      .catch(() => {
        this.errorMessage = "Erreur durant la validation du CV";
      });
    },
  }
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