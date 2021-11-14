<template>
  <div class="container cont_home mb-5">
    <div class="row cont_central">
      <div class="col-xs-12 col-lg-4">
        <div class="card bg-secondary text-white p-2" style="width: 18rem">
          <div class="mx-2">
            <img class="card-img-top" :src="src" alt="user icon" />
            <div class="card-body">
              <h5 class="card-title">Nom d'utilisateur: {{ user.username }}</h5>
              <h5 class="card-text">Prénom: {{ user.firstName }}</h5>
              <h5 class="card-text">Nom: {{ user.lastName }}</h5>
              <h5 class="card-text">Adresse courriel: {{ user.email }}</h5>
              <h5 class="card-text">Depuis {{ dateFormat }}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-lg-8">
          <CVList />
      </div>
    </div>
  </div>
</template>

<script>
import auth from "../services/Auth";
import user_icon from "../assets/user_icon.png";
import CVList from "./CVList/CVList.vue"

export default {
  name: "Home",
  data() {
    return {
      user: auth.getUser(),
      isStudent: auth.isStudent(),
      src: user_icon,
      dateFormat: "",
    };
  },
  components: {
      CVList,
  },
  methods: {
    formatDate: function () {
      let date = new Date(this.user.creationDate);
      this.dateFormat = date.toISOString().split("T")[0];
    },
  },
  mounted() {
    this.formatDate();
  },
};
</script>

<style scoped>
.cont_central {
  padding: 2%;
  background-image: linear-gradient(-226deg, #ffffff 8%, #eef3f5 100%);
  border-radius: 8px;
  transition: all 0.5s;
  width: 95%;
  margin: 5% auto;
}

.card {
  margin: 1% auto;
}
</style>
