<script>
  import { TITLE_INTERNSHIP_OFFER_FORM_DEPOSIT } from "../../Utils/TITLE";
  import axios from "axios";
  import { navigate } from "svelte-routing";
  import {
    URL_DEPOSIT_INTERNSHIP_OFFER,
    URL_VALIDATE_INTERNSHIP_OFFER,
  } from "../../Utils/API";
  import DEPARTMENT from "../../Utils/DEPARTMENT";
  import WORKSHIFT from "../../Utils/WORKSHIFT";
  import WORKDAYS from "../../Utils/WORKDAYS";
  import Button from "../Button.svelte";
  import { currentUser } from "../../services/Store";

  export let location;
  if (location == null) {
    console.error("an Error occured during the routing");
  }

  $: errorMessage = "";
  let isInternshipOfferPassed = location.state.id !== undefined;
  let btnDisabled = isInternshipOfferPassed ? false : true;
  let internshipOffer = isInternshipOfferPassed
    ? location.state
    : {
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
      };
  let workdays = WORKDAYS;

  if (isInternshipOfferPassed) {
    formatDates();
    workdays.forEach(
      (workday) =>
        (workday.value = internshipOffer.workDays.includes(workday.key))
    );
  }

  function formatDates() {
    if (internshipOffer) {
      internshipOffer.startDate = formatDate(internshipOffer.startDate);
      internshipOffer.endDate = formatDate(internshipOffer.endDate);
    }
  }

  function formatDate(dateString) {
    let date = new Date(dateString);
    let dateFormatted = date.toISOString().split("T")[0];
    return dateFormatted;
  }

  const handleValidations = () => {
    if (
      internshipOffer.startDate != "" &&
      internshipOffer.endDate != "" &&
      formatDate(internshipOffer.startDate) >
        formatDate(internshipOffer.endDate)
    ) {
      btnDisabled = true;
      errorMessage =
        "Erreur, La date de début de stage doit être avant celle de fin de stage !";
    } else if (
      internshipOffer.weeklyWorkTime != "" &&
      internshipOffer.weeklyWorkTime > 40
    ) {
      btnDisabled = true;
      errorMessage =
        "Erreur, La limite légale de travail d'un stagiaire est de 40H";
    } else if (
      internshipOffer.weeklyWorkTime != "" &&
      internshipOffer.weeklyWorkTime < 0
    ) {
      btnDisabled = true;
      errorMessage = "Erreur, veuillez rentrer un horaire valide";
    } else if (
      internshipOffer.hourlySalary != "" &&
      internshipOffer.hourlySalary < 13.5
    ) {
      btnDisabled = true;
      errorMessage =
        "Erreur, veuillez ne pas être un radin, salaire insuffisant";
    } else if (
      internshipOffer.postalCode != "" &&
      internshipOffer.postalCode.length < 6
    ) {
      btnDisabled = true;
      errorMessage =
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
      btnDisabled = false;
      errorMessage = "";
    } else {
      errorMessage = "";
    }
  };

  const depositInternshipOffer = () => {
    internshipOffer.monitor = $currentUser;
    let internshipWorkdays = workdays.filter((workday) => workday.value);
    internshipWorkdays.forEach((workday) =>
      internshipOffer.workDays.push(workday.key)
    );
    if (internshipOffer.workDays.length == 0) {
      errorMessage = "Erreur, Veuillez choisir au moins un jour de travail !";
    } else if (!btnDisabled) {
      let formData = new FormData();
      internshipOffer.monitor.signature = undefined;
      formData.append("internshipOffer", JSON.stringify(internshipOffer));
      axios
        .post(URL_DEPOSIT_INTERNSHIP_OFFER, formData)
        .then((response) => {
          setTimeout(() => {
            navigate("/home");
          }, 3000);
          errorMessage = "Confirmation du dépôt, vous allez être redirigé";
        })
        .catch((error) => {
          isLoading = false;
          errorMessage = "Erreur durant le dépot de l'offre de stage...";
        });
    }
  };

  const validateInternshipOffer = () => {
    console.log("test");
    axios
      .post(URL_VALIDATE_INTERNSHIP_OFFER + internshipOffer.id)
      .then((response) => {
        errorMessage =
          "L'offre de stage a été validée, vous allez être redirigé";
        setTimeout(() => {
          navigate("/internshipOfferList/validation");
        }, 2000);
      })
      .catch((error) => {
        errorMessage = "Erreur lors de la validation";
      });
  };
</script>

<div class="container cont_principal">
  <div class="row cont_central">
    <div class="col cont_form">
      <div class="row">
        <div class="container cont_title_form">
          <h2>{TITLE_INTERNSHIP_OFFER_FORM_DEPOSIT}</h2>
        </div>
      </div>
      <div class="row">
        <fieldset disabled={isInternshipOfferPassed}>
          <form>
            <div class="cont_inputs">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control input_form"
                  id="jobName"
                  placeholder="Entrer le nom du poste de travail"
                  required
                  bind:value={internshipOffer.jobName}
                  on:input={handleValidations}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control input_form"
                  id="description"
                  placeholder="Entrer une description du poste"
                  required
                  bind:value={internshipOffer.description}
                  on:input={handleValidations}
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
                  bind:value={internshipOffer.startDate}
                  on:input={handleValidations}
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
                  bind:value={internshipOffer.endDate}
                  on:input={handleValidations}
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
                  bind:value={internshipOffer.weeklyWorkTime}
                  on:input={handleValidations}
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
                  bind:value={internshipOffer.hourlySalary}
                  on:input={handleValidations}
                />
              </div>
              <div class="form-group">
                <label for="startDate" class="discret mb-0">
                  Jours de travail
                </label>
                <div class="container workDays checkboxes">
                  {#each workdays as workday}
                    <div class="form-group">
                      <div class="container">
                        <div class="row">
                          <div class="col">
                            <input
                              type="checkbox"
                              class="checkboxes_input"
                              bind:checked={workday.value}
                            />
                          </div>
                          <div class="col">
                            <label for="startDate" class="discret mb-0">
                              <span>{workday.name}</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control input_form"
                  id="address"
                  placeholder="Entrer l'adresse de l'entreprise"
                  required
                  bind:value={internshipOffer.address}
                  on:input={handleValidations}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control input_form"
                  id="city"
                  placeholder="Entrer la ville de l'entreprise"
                  required
                  bind:value={internshipOffer.city}
                  on:input={handleValidations}
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
                  bind:value={internshipOffer.postalCode}
                  on:input={handleValidations}
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
                  bind:value={internshipOffer.workShift}
                  on:input={handleValidations}
                >
                  {#each WORKSHIFT as workshift}
                    <option value={workshift.key}>{workshift.name}</option>
                  {/each}
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
                  bind:value={internshipOffer.workField}
                  on:input={handleValidations}
                >
                  {#each DEPARTMENT as department}
                    <option value={department.key}>{department.name}</option>
                  {/each}
                </select>
              </div>
            </div>
            <div class="container cont_btn">
              <p
                style={errorMessage.startsWith("Erreur")
                  ? "color:red;"
                  : "color:green;"}
              >
                {errorMessage}
              </p>
              {#if isInternshipOfferPassed}
                <Button
                  style="btn_submit"
                  type="submit"
                  on:handle-click={validateInternshipOffer}
                >
                  Valider
                </Button>
              {:else}
                <Button
                  style="btn_submit"
                  type="submit"
                  disabled={btnDisabled}
                  on:handle-click={depositInternshipOffer}
                >
                  Confirmer
                </Button>
              {/if}
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  </div>
</div>

<style>
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
