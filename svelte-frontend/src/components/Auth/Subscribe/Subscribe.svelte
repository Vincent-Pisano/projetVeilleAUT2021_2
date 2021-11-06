<script>
  import Button from "../../Button.svelte";
  import actors from "../../../utils/ACTORS";
  import {
    minLengthUsername,
    minLengthPassword,
    validateEmail
  } from "../../../utils/VALIDATION";

  export let location;
  if (location == null) {
    console.error("an Error occured during the routing");
  }

  $: currentChoice = actors[0];
  $: errorMessage = "";
  let btnDisabled = true;

  const changeCurrentChoice = (e) => {
    errorMessage = "";
    btnDisabled = true;
    currentChoice = actors.find((actor) => actor.key == e.detail);
  };

  const handleValidations = (loginFields) => {
    if (
      loginFields.username != null &&
      loginFields.username.trim().length <= minLengthUsername
    ) {
      errorMessage = `Nom d'utilisateur doit être d'au moins ${minLengthUsername} charactères`;
      btnDisabled = true;
    } else if (
      loginFields.password != null &&
      loginFields.password.trim().length <= minLengthPassword
    ) {
      errorMessage = `Mot de passe doit être d'au moins ${minLengthPassword} charactères`;
      btnDisabled = true;
    } else if (
      loginFields.email != null &&
      !validateEmail(loginFields.email)
    ) {
        errorMessage = `L'email n'est pas sous le bon format (exemple@test.com)`;
        btnDisabled = true;
    }
    else if (
      Object.values(loginFields).every(
        (element) => element != null && element != ""
      )
    ) {
      btnDisabled = false;
      errorMessage = "";
    } else {
      errorMessage = "";
    }
  };
</script>

<div class="container cont_principal">
  <div class="row cont_central">
    <div class="col-md">
      <div class="row">
        <div class="cont_title_form">
          <h2>Inscription</h2>
        </div>
      </div>
      <div class="row cont_buttons_sign_up">
        {#each actors as actor, i}
          <div class={"px-0 mb-2 " + (i % 2 === 1 ? "col-4" : "col-3")}>
            <Button
              key={actor.key}
              style={currentChoice.key === actor.key
                ? "btn_link btn_link_selected"
                : "btn_link"}
              type="button"
              on:handle-click={changeCurrentChoice}
            >
              {actor.name}
            </Button>
          </div>
        {/each}
      </div>
      <svelte:component
        this={currentChoice.subscribeForm}
        {handleValidations}
        {errorMessage}
        {btnDisabled}
      />
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
    width: 40%;
    margin: 5% auto;
  }

  @media only screen and (max-width: 600px) {
    .cont_central {
      width: 98%;
    }
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

  .cont_buttons_sign_up {
    margin-bottom: 5%;
    margin-top: 10%;
    justify-content: space-evenly;
  }

  .cont_buttons_sign_up div {
    display: inline-block;
  }
</style>
