<template>
  <form>
    <div class="cont_inputs">
      <div class="form-group">
        <label for="username" class="discret mb-0">
          Veuillez commencez votre nom d'utilisateur par "E"
        </label>
        <input
          type="text"
          class="form-control input_form"
          id="username"
          placeholder="Entrer votre nom d'utilisateur"
          v-model="studentfields.username"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control input_form"
          id="password"
          placeholder="Entrer votre mot de passe"
          v-model="studentfields.password"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control input_form"
          id="email"
          placeholder="Entrer votre courriel"
          v-model="studentfields.email"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="firstName"
          class="form-control input_form"
          id="firstName"
          placeholder="Entrer votre prénom"
          v-model="studentfields.firstName"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="lastName"
          class="form-control input_form"
          id="lastName"
          placeholder="Entrer votre nom de famille"
          v-model="studentfields.lastName"
          required
        />
      </div>
      <div class="form-group">
        <select
          name="departments"
          id="departments"
          class="input_form select_form"
          v-model="studentfields.department"
          required
        >
          
          <option
            :key="department.key"
            v-for="department in departments"
            :value="department.key"
          >
            {{ department.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="container cont_btn">
      <p>{{ errorMessage }}</p>
      <Button @btn-click="subscribe" :style="'btn_submit'" :disabled="btnDisabled"
        >Confirmer</Button
      >
    </div>
  </form>
</template>

<script>
import Button from "../../Button.vue";
import axios from "axios";
import auth from "../../../services/Auth";
import departments from "../../../utils/DEPARTMENT";
import { URL_SIGN_UP_STUDENT } from "../../../utils/API";
import {
  minLengthUsername,
  minLengthPassword,
  validateEmail,
} from "../../../utils/VALIDATION";

export default {
  name: "SubscribeFormStudent",
  components: {
    Button,
  },
  data() {
    return {
      errorMessage: "",
      departments: departments,
      btnDisabled: true,
      studentfields: {
        username: null,
        password: null,
        email: null,
        firstName: null,
        lastName: null,
        department: "COMPUTER_SCIENCE",
      },
    };
  },
  methods: {
    handleValidations(fields) {
      if (
        fields.username != null &&
        fields.username.trim().length < minLengthUsername
      ) {
        this.errorMessage = `Nom d'utilisateur doit être d'au moins ${minLengthUsername} charactères`;
        this.btnDisabled = true;
      } else if (!fields.username.startsWith("E")) {
        this.errorMessage = "Le nom d'utilisateur doit commencer par 'E' !";
        this.btnDisabled = true;
      } else if (
        fields.password != null &&
        fields.password.trim().length < minLengthPassword
      ) {
        this.errorMessage = `Mot de passe doit être d'au moins ${minLengthPassword} charactères`;
        this.btnDisabled = true;
      } else if (fields.email != null && !validateEmail(fields.email)) {
        this.errorMessage = `L'email n'est pas sous le bon format (exemple@test.com)`;
        this.btnDisabled = true;
      } else if (
        Object.values(fields).every(
          (element) => element != null && element != ""
        )
      ) {
        this.btnDisabled = false;
        this.errorMessage = "";
      } else {
        this.errorMessage = "";
      }
    },
    subscribe() {
      if (!this.btnDisabled) {
        axios
          .post(URL_SIGN_UP_STUDENT, this.studentfields)
          .then((response) => {
            auth.login(() => this.$router.push("/home"), response.data);
          })
          .catch(() => {
            this.errorMessage =
              "Le nom d'utilisateur ou le courriel existe déjà.";
          });
      }
    },
  },
  watch: {
    studentfields: {
      handler(studentfields) {
        this.handleValidations(studentfields);
      },
      deep: true,
    },
  },
};
</script>