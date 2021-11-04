<script>
  import Button from "../../Button.svelte";

  let type = "";
  let btnDisabled = true;
  let minLengthUsername = 8;
  let minLengthPassword = 4;
  let loginFields = {
    username: null,
    password: null,
  };
  $: errorMessage = "";

  const handleValidations = () => {
    if (loginFields.username != null && loginFields.username.trim().length <= minLengthUsername) {
      errorMessage = `Nom d'utilisateur doit être d'au moins ${minLengthUsername} charactères`;
      btnDisabled = true;
    } else if (loginFields.password != null && loginFields.password.trim().length <= minLengthPassword) {
      errorMessage = `Mot de passe doit être d'au moins ${minLengthPassword} charactères`;
      btnDisabled = true;
    } else {
      errorMessage = "";
      btnDisabled = false;
    }
  };

  const login = () => {
    console.log('button clicked')
    if (!btnDisabled) {
      console.log("Form valide")
    }
  }

</script>

<div class="container cont_principal">
  <div class="row cont_central">
    <div class="col-md">
      <div class="row">
        <div class="cont_title_form">
          <h2>Connexion</h2>
        </div>
      </div>
      <div class="row">
        <form>
          <div class="cont_inputs">
            <div class="form-group">
              <label for="username" class="discret mb-0">
                Veuillez rentrez vos informations d'utilisations
              </label>
              <input
                type="text"
                class="form-control input_form"
                id="username"
                placeholder="Entrer votre nom d'utilisateur"
                required
                bind:value={loginFields.username}
                on:input={handleValidations}
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
                on:input={handleValidations}
              />
            </div>
          </div>
          <div class="container cont_btn">
            <p>{errorMessage}</p>
            <Button
              style="btn_submit"
              type="submit"
              disabled={btnDisabled}
              on:handle-submit={login}
            />
          </div>
        </form>
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
    width: 40%;
    margin: 5% auto;
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
