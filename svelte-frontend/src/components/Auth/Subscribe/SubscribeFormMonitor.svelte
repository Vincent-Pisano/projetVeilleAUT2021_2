<script>
  import { URL_SIGN_UP_MONITOR } from "../../../utils/API";
  import axios from "axios";
  import { navigate } from "svelte-routing";
  import auth from "../../../services/Auth";
  import Button from "../../Button.svelte";

  export let handleValidations;
  export let errorMessage;
  export let btnDisabled;

  let monitorfields = {
    username: null,
    password: null,
    email: null,
    firstName: null,
    lastName: null,
    enterpriseName: null,
    jobTitle: null,
  };

  const subscribe = () => {
    if (monitorfields.username.startsWith("M")) {
      if (!btnDisabled) {
        axios
          .post(URL_SIGN_UP_MONITOR, monitorfields)
          .then((response) => {
            auth.login(() => {
              navigate("/home");
            }, response.data);
          })
          .catch((error) => {
            errorMessage = "Le nom d'utilisateur ou le courriel existe déjà.";
          });
      } else {
        errorMessage = "Le nom d'utilisateur doit commencer par 'M' !.";
      }
    }
  };
</script>

<form>
  <div class="cont_inputs">
    <div class="form-group">
      <label for="username" class="discret mb-0">
        Veuillez commencez votre nom d'utilisateur par "M"
      </label>
      <input
        type="text"
        class="form-control input_form"
        id="username"
        placeholder="Entrer votre nom d'utilisateur"
        required
        bind:value={monitorfields.username}
        on:input={() => handleValidations(monitorfields)}
      />
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control input_form"
        id="password"
        placeholder="Entrer votre mot de passe"
        required
        bind:value={monitorfields.password}
        on:input={() => handleValidations(monitorfields)}
      />
    </div>
    <div class="form-group">
      <input
        type="email"
        class="form-control input_form"
        id="email"
        placeholder="Entrer votre courriel"
        required
        bind:value={monitorfields.email}
        on:input={() => handleValidations(monitorfields)}
      />
    </div>
    <div class="form-group">
      <input
        type="firstName"
        class="form-control input_form"
        id="firstName"
        placeholder="Entrer votre prénom"
        required
        bind:value={monitorfields.firstName}
        on:input={() => handleValidations(monitorfields)}
      />
    </div>
    <div class="form-group">
      <input
        type="lastName"
        class="form-control input_form"
        id="lastName"
        placeholder="Entrer votre nom de famille"
        required
        bind:value={monitorfields.lastName}
        on:input={() => handleValidations(monitorfields)}
      />
    </div>
    <div class="form-group">
      <input
        type="enterpriseName"
        class="form-control input_form"
        id="enterpriseName"
        placeholder="Entrer votre nom de poste"
        required
        bind:value={monitorfields.enterpriseName}
        on:input={() => handleValidations(monitorfields)}
      />
    </div>
    <div class="form-group">
      <input
        type="jobTitle"
        class="form-control input_form"
        id="jobTitle"
        placeholder="Entrer votre nom d'entreprise"
        required
        bind:value={monitorfields.jobTitle}
        on:input={() => handleValidations(monitorfields)}
      />
    </div>
  </div>
  <div class="container cont_btn">
    <p>{errorMessage}</p>
    <Button
      style="btn_submit"
      type="submit"
      disabled={btnDisabled}
      on:handle-click={subscribe}
    >
      Confirmer
    </Button>
  </div>
</form>

<style>
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

    margin: 5% 5%;
    padding: 4% 2%;
    opacity: 1;
    height: 5px;
    display: block;
  }

  .input_form:focus {
    box-shadow: none;
    background-color: transparent;
  }

  .cont_btn {
    position: relative;
    display: inline-block;
  }

  .cont_btn p {
    color: red;
    font-size: 1rem;
    font-weight: bold;
  }
</style>
