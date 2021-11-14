<template>
  <div class="container cont_list_cv">
    <div class="container cont_list_centrar">
      <h2 class="cont_title_form">Liste de vos CVs</h2>
      <div class="containe cont_list">
        <table
          class="
            table
            table-dark
            table-striped
            table-bordered
            table-hover
            table-responsive
          "
        >
          <thead>
            <tr>
              <th scope="col">Nom de fichier</th>
              <th scope="col">Téléchargement</th>
              <th scope="col">Supression</th>
              <th scope="col">CV Actif</th>
              <th scope="col">CV Valide</th>
            </tr>
          </thead>
          <tbody>
            <CVItem v-for="(cv, i) in CVList" :key="i" :cv="cv" />
            <tr v-if="CVList.length == 0">
              <td colspan="5">Pas de CV</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="CVList.length < 10">
        <CVButtonDeposit />
      </div>
    </div>
  </div>
</template>

<script>
import CVButtonDeposit from "./Button/CVButtonDeposit.vue";
import CVItem from "./CVItem.vue";
import auth from "../../services/Auth";

export default {
  name: "CVList",
  components: {
    CVButtonDeposit,
    CVItem
  },
  data() {
    return {
      CVList: auth.user.cvlist,
    };
  },
};
</script>

<style>
.cont_list_cv {
  margin-bottom: 5%;
}

.cont_list_centrar {
  padding: 2%;
  background-image: linear-gradient(-226deg, #ffffff 8%, #eef3f5 100%);
  border-radius: 8px;
  transition: all 0.5s;
  min-width: 50%;
}

.cont_title_form {
  width: 100%;
  box-shadow: none !important;
  color: rgba(255, 64, 88, 0.74);
}

.cont_list {
  width: 100%;
  margin-top: 20px;
}

.table > :not(:first-child) {
  border-top: none !important;
}
</style>