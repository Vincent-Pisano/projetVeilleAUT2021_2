<template>
  <div class="container cont_principal">
    <div class="row cont_central">
      <div class="col-md">
        <div class="row">
          <div class="cont_title_form">
            <h2>Inscription</h2>
          </div>
        </div>
        <div class="row cont_buttons_sign_up">
          <div
            :class="'px-0 mb-2 ' + (i % 2 === 1 ? 'col-4' : 'col-3')"
            :key="actor.key"
            v-for="(actor, i) in actors"
          >
            <Button
              :style="
                'btn_link ' +
                (currentChoice.key == actor.key ? 'btn_link_selected' : '')
              "
              :id="actor.key"
              @btn-click="changeCurrentChoice"
              :disabled="false"
              >{{ actor.name }}</Button
            >
          </div>
        </div>
        <div>
          <component :is="currentChoice.subscribeForm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../Button.vue";
import actors from "../../../utils/ACTORS";

export default {
  name: "Login",
  components: {
    Button,
  },
  data() {
    return {
      actors: actors,
      currentChoice: actors[0],
    };
  },
  methods: {
    changeCurrentChoice(key) {
      this.currentChoice = actors.find((actor) => actor.key == key);
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