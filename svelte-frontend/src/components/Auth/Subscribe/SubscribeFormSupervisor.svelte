<script>
  import departments from "../../../utils/DEPARTMENT";
  import Button from "../../Button.svelte";

  export let handleValidations;
  export let errorMessage;
  export let btnDisabled;

  let loginFields = {
    username: null,
    password: null,
    email: null,
    firstName: null,
    lastName: null,
    department: "COMPUTER_SCIENCE",
  };

  const subscribe = () => {
      if (!btnDisabled) {
          console.log("Form valide")
      }
  };
</script>

<form>
  <div class="cont_inputs">
    <div class="form-group">
      <label for="username" class="discret mb-0">
        Veuillez commencez votre nom d'utilisateur par "S"
      </label>
      <input
        type="text"
        class="form-control input_form"
        id="username"
        placeholder="Entrer votre nom d'utilisateur"
        required
        bind:value={loginFields.username}
        on:input={() => handleValidations(loginFields)}
      />
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control input_form"
        id="password"
        placeholder="Entrer votre mot de passe"
        required
        bind:value={loginFields.password}
        on:input={() => handleValidations(loginFields)}
      />
    </div>
    <div class="form-group">
      <input
        type="email"
        class="form-control input_form"
        id="email"
        placeholder="Entrer votre courriel"
        required
        bind:value={loginFields.email}
        on:input={() => handleValidations(loginFields)}
      />
    </div>
    <div class="form-group">
      <input
        type="firstName"
        class="form-control input_form"
        id="firstName"
        placeholder="Entrer votre prénom"
        required
        bind:value={loginFields.firstName}
        on:input={() => handleValidations(loginFields)}
      />
    </div>
    <div class="form-group">
      <input
        type="lastName"
        class="form-control input_form"
        id="lastName"
        placeholder="Entrer votre nom de famille"
        required
        bind:value={loginFields.lastName}
        on:input={() => handleValidations(loginFields)}
      />
    </div>
    <div class="form-group">
      <select
        name="departments"
        id="departments"
        class="input_form select_form"
        required
        bind:value={loginFields.department}
        on:input={() => handleValidations(loginFields)}
      >
        {#each departments as department}
          <option value={department.key}>{department.name}</option>
        {/each}
      </select>
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

  .select_form {
    border: 1px solid #b0bec5;
    padding: 0% 2%;
    height: 50px;
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
