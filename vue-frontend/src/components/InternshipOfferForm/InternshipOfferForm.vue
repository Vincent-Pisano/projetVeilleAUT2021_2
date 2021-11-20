<template>
  <div class="container cont_principal">
    <div class="row cont_central">
      <div class="col cont_form">
        <div class="row">
          <div class="container cont_title_form">
            <h2>{{ TITLE_INTERNSHIP_OFFER_FORM_DEPOSIT }}</h2>
          </div>
        </div>
        <div class="row">
          <fieldset >
            <form>
              <div class="cont_inputs">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control input_form"
                    id="jobName"
                    placeholder="Entrer le nom du poste de travail"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control input_form"
                    id="description"
                    placeholder="Entrer une description du poste"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="startDate" class="discret mb-0">
                    Date de début du stage
                  </label>
                  <input
                    type="date"
                    class="form-control input_form"
                    id="startDate"
                    placeholder="Entrer la date de début du stage"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="endDate" class="discret mb-0">
                    Date de fin du stage
                  </label>
                  <input
                    type="date"
                    class="form-control input_form"
                    id="endDate"
                    placeholder="Entrer la date de fin du stage"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="40"
                    class="form-control input_form"
                    id="weeklyWorkTime"
                    placeholder="Entrer la quantité d'heures par semaine"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    step=".01"
                    min="0"
                    max="100"
                    class="form-control input_form"
                    id="hourlySalary"
                    placeholder="Entrer le salaire en dollars($) par heure"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="startDate" class="discret mb-0">
                    Jours de travail
                  </label>
                  <div class="container workDays checkboxes">
                    <div class="form-group" :key="workday.key" v-for="workday in WORKDAYS">
                      <div class="container">
                        <div class="row">
                          <div class="col">
                            <input
                              type="checkbox"
                              class="checkboxes_input"
                              :checked="workday.value"
                            />
                          </div>
                          <div class="col">
                            <label for="startDate" class="discret mb-0">
                              <span>{{ workday.name }}</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control input_form"
                    id="address"
                    placeholder="Entrer l'adresse de l'entreprise"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control input_form"
                    id="city"
                    placeholder="Entrer la ville de l'entreprise"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control input_form"
                    id="postalCode"
                    placeholder="Entrer le code postal de l'entreprise"
                    required
                    minLength="6"
                    maxLength="6"
                  />
                </div>
                <div class="form-group">
                  <label for="username" class="discret mb-0">
                    Type d'horaire du stage
                  </label>
                  <select
                    name="workShift"
                    id="workShift"
                    class="input_form select_form"
                    required
                  >
                    <option :key="workshift.key" v-for="workshift in WORKSHIFT" :value="workshift.key">{{ workshift.name }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="username" class="discret mb-0">
                    Type d'offre de stage
                  </label>
                  <select
                    name="workField"
                    id="workField"
                    class="input_form select_form"
                    required
                  >
                    <option :key="department.key" v-for="department in DEPARTMENT" :value="department.key">
                      {{ department.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="container cont_btn">
                <p
                  :style="
                    errorMessage.startsWith('Erreur')
                      ? 'color:red;'
                      : 'color:green;'
                  "
                >
                  {{ errorMessage }}
                </p>
                <Button
                  :style="'btn_submit'"
                  type="submit"
                  :disabled="btnDisabled"
                >
                  Confirmer
                </Button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import auth from "../../services/Auth";
import { TITLE_INTERNSHIP_OFFER_FORM_DEPOSIT } from "../../utils/TITLE";
// eslint-disable-next-line no-unused-vars
import { URL_DEPOSIT_INTERNSHIP_OFFER, URL_VALIDATE_INTERNSHIP_OFFER,} from "../../utils/API";
import DEPARTMENT from "../../utils/DEPARTMENT";
import WORKSHIFT from "../../utils/WORKSHIFT";
// eslint-disable-next-line no-unused-vars
import WORKDAYS from "../../utils/WORKDAYS";

export default {
  name: "InternshipOfferForm",
  components: {
    Button,
  },
  data() {
    return {
      errorMessage: "",
      btnDisabled: true,
      internshipOffer: {
        jobName: "TEST",
        description: "",
        startDate: "",
        endDate: "",
        weeklyWorkTime: "",
        hourlySalary: "",
        workDays: [],
        address: "",
        city: "",
        postalCode: "",
        workShift: WORKSHIFT[0].key,
        workField: DEPARTMENT[0].key,
        monitor: {},
      },
      TITLE_INTERNSHIP_OFFER_FORM_DEPOSIT: TITLE_INTERNSHIP_OFFER_FORM_DEPOSIT,
      DEPARTMENT: DEPARTMENT,
      WORKSHIFT: WORKSHIFT,
      WORKDAYS: WORKDAYS,
    };
  },
  methods: {
    formatDates() {
      this.internshipOffer.startDate = this.formatDate(
        this.internshipOffer.startDate
      );
      this.internshipOffer.endDate = this.formatDate(
        this.internshipOffer.endDate
      );
    },
    formatDate(dateString) {
      let date = new Date(dateString);
      let dateFormatted = date.toISOString().split("T")[0];
      return dateFormatted;
    },
    handleValidations(internshipOffer) {
      if (
        internshipOffer.startDate != "" &&
        internshipOffer.endDate != "" &&
        this.formatDate(internshipOffer.startDate) >
          this.formatDate(internshipOffer.endDate)
      ) {
        this.btnDisabled = true;
        this.errorMessage =
          "Erreur, La date de début de stage doit être avant celle de fin de stage !";
      } else if (
        internshipOffer.weeklyWorkTime != "" &&
        internshipOffer.weeklyWorkTime > 40
      ) {
        this.btnDisabled = true;
        this.errorMessage =
          "Erreur, La limite légale de travail d'un stagiaire est de 40H";
      } else if (
        internshipOffer.weeklyWorkTime != "" &&
        internshipOffer.weeklyWorkTime < 0
      ) {
        this.btnDisabled = true;
        this.errorMessage = "Erreur, veuillez rentrer un horaire valide";
      } else if (
        internshipOffer.hourlySalary != "" &&
        internshipOffer.hourlySalary < 13.5
      ) {
        this.btnDisabled = true;
        this.errorMessage =
          "Erreur, veuillez ne pas être un radin, salaire insuffisant";
      } else if (
        internshipOffer.postalCode != "" &&
        internshipOffer.postalCode.length < 6
      ) {
        this.btnDisabled = true;
        this.errorMessage =
          "Erreur, Veuillez rentrer un code postal Valide ! (ex. EX3M5l)";
      } else if (
        internshipOffer.jobName != "" &&
        internshipOffer.description != "" &&
        internshipOffer.startDate != "" &&
        internshipOffer.endDate != "" &&
        internshipOffer.weeklyWorkTime != "" &&
        internshipOffer.hourlySalary != "" &&
        internshipOffer.address != "" &&
        internshipOffer.city != "" &&
        internshipOffer.postalCode != "" &&
        internshipOffer.workShift != "" &&
        internshipOffer.workField != ""
      ) {
        this.btnDisabled = false;
        this.errorMessage = "";
      } else {
        this.errorMessage = "";
      }
    },
    depositInternshipOffer() {
    this.internshipOffer.monitor = this.currentUser; //non
    let internshipWorkdays = this.workdays.filter((workday) => workday.value);
    internshipWorkdays.forEach((workday) =>
      this.internshipOffer.workDays.push(workday.key)
    );
    if (this.internshipOffer.workDays.length == 0) {
      this.errorMessage = "Erreur, Veuillez choisir au moins un jour de travail !";
    } else if (!this.btnDisabled) {
      let formData = new FormData();
      this.internshipOffer.monitor.signature = undefined;
      formData.append("internshipOffer", JSON.stringify(this.internshipOffer));
      axios
        .post(URL_DEPOSIT_INTERNSHIP_OFFER, formData)
        .then(() => {
          setTimeout(() => {
            this.$router.push("/home")
          }, 3000);
          this.errorMessage = "Confirmation du dépôt, vous allez être redirigé";
        })
        .catch(() => {
          this.isLoading = false;
          this.errorMessage = "Erreur durant le dépot de l'offre de stage...";
        });
    }
  },
  },
  watch: {
    loginFields: {
      handler(loginFields) {
        this.handleValidations(loginFields);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.cont_principal {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
  }

  .cont_central {
    padding: 2%;
    background-image: linear-gradient(-226deg, #ffffff 8%, #eef3f5 100%);
    border-radius: 8px;
    transition: all 0.5s;
    width: 75%;
    margin: 5% auto;
  }

  .cont_form {
    min-width: 100%;
  }

  .cont_title_form {
    width: 100%;
    box-shadow: none !important;
    color: rgba(255, 64, 88, 0.74);
  }

  .cont_title_form h2 {
    font-weight: bold;
    font-size: 2.5rem;
  }

  .discret {
    color: #9bacb3;
  }

  .cont_inputs {
    width: 100%;
    margin-top: 2%;
  }

  .input_form {
    width: 90%;
    border: none;
    border-bottom: 1px solid #b0bec5;
    background-color: transparent;
    font-size: 20px;
    outline: none;
    transition: all 0.5s;
    border-radius: 0%;

    margin: 3% 5%;
    padding: 3% 2%;
    opacity: 1;
    height: 5px;
    display: block;
  }

  .input_form:focus {
    box-shadow: none;
    background-color: transparent;
  }

  .select_form {
    width: 90%;
    border: none;
    border: 1px solid #b0bec5;
    background-color: transparent;
    font-size: 20px;
    outline: none;
    transition: all 0.5s;

    margin: 5% 5%;
    padding: 0% 2%;
    opacity: 1;
    height: 50px;
    font-size: 20px;
    display: block;
  }

  .checkboxes {
    display: inline-block;
    margin-top: 20px;
  }

  .checkboxes .row {
    justify-content: center;
    margin-top: 2%;
  }

  .checkboxes .row > * {
    margin: 0px 0px;
  }

  .checkboxes label {
    display: block;
    padding-right: 10px;
    padding-left: 22px;
    text-indent: -22px;
    margin-bottom: 5px;
    color: #999;
  }
  .checkboxes input {
    vertical-align: middle;
    width: 25px;
    height: 25px;
  }
  .checkboxes label span {
    vertical-align: middle;
    margin-left: 20px;
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    .input_form {
      padding: 15px;
    }
    .cont_central {
      width: 98%;
    }
    .input_form {
      padding: 5% 2%;
    }
  }
</style>