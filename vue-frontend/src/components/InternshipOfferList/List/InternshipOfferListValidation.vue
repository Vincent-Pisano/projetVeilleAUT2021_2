<template>
  <InternshipOfferList
    :title="title"
    :errorMessage="errorMessage"
    :internshipOffers="internshipOffers"
    @change-current-internship-offer="changeCurrentInternshipOffer"
  />
</template>

<script>
import InternshipOfferList from "../InternshipOfferList.vue";
import { TITLE_INTERNSHIP_OFFER_LIST_VALIDATION } from "../../../utils/TITLE";
import { URL_GET_ALL_INTERNSHIP_OFFERS_TO_VALIDATE } from "../../../utils/API";
import axios from "axios";
import store from "../../../services/Store";

export default {
  name: "StudentListValidCV",
  components: {
    InternshipOfferList,
  },
  data() {
    return {
      title: TITLE_INTERNSHIP_OFFER_LIST_VALIDATION,
      errorMessage: "",
      internshipOffers: [],
      currentInternshipOffer: undefined,
    };
  },
  created() {
    axios
      .get(URL_GET_ALL_INTERNSHIP_OFFERS_TO_VALIDATE)
      .then((response) => {
        this.internshipOffers = response.data;
      })
      .catch((error) => {
        console.error(error);
        this.errorMessage = "Erreur! Aucune offre de stage à valider actuellement";
      });
  },
  methods: {
    changeCurrentInternshipOffer(internshipOffer) {
      this.currentInternshipOffer = internshipOffer;
      store.commit('setCurrentInternshipOffer', this.currentInternshipOffer)
      this.$router.push({ name: 'InternshipOfferFormValidation'})
    }
  },
};
</script>

<style>
</style>