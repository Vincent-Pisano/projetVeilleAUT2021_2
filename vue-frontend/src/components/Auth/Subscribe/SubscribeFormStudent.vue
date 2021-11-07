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
        required
      />
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control input_form"
        id="password"
        placeholder="Entrer votre mot de passe"
        required
      />
    </div>
    <div class="form-group">
      <input
        type="email"
        class="form-control input_form"
        id="email"
        placeholder="Entrer votre courriel"
        required
      />
    </div>
    <div class="form-group">
      <input
        type="firstName"
        class="form-control input_form"
        id="firstName"
        placeholder="Entrer votre prénom"
        required
      />
    </div>
    <div class="form-group">
      <input
        type="lastName"
        class="form-control input_form"
        id="lastName"
        placeholder="Entrer votre nom de famille"
        required
      />
    </div>
    <div class="form-group">
      <select
        name="departments"
        id="departments"
        class="input_form select_form"
        required
      >
          <option :key="department.key"
            v-for="department in departments" :value="department.key">{{department.name}}</option>
      </select>
    </div>
  </div>
  <div class="container cont_btn">
    <p>{{errorMessage}}</p>
    <Button @btn-click="$emit('temp')" :style="'btn_submit'">Confirmer</Button>
  </div>
</form>
</template>

<script>
import Button from "../../Button.vue";
import departments from "../../../utils/DEPARTMENT";

export default {
  name: "SubscribeFormStudent",
  components: {
    Button,
  }, 
  data() {
    return {
      errorMessage: "",
      departments: departments
    };
  },
};
</script>