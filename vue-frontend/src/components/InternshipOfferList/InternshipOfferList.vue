<template>
  <div class="container cont_principal">
    <div class="container cont_list_centrar">
      <h2 class="cont_title_form mb-5">{{ title }}</h2>
      <div class="container">
        <p
          :style="
            errorMessage.startsWith('Erreur') ? 'color:red;' : 'color:green;'
          "
        >
          {{ errorMessage }}
        </p>
        <InternshipOfferItem
          v-for="internshipOffer in internshipOffers"
          :key="internshipOffer.id"
          :internshipOffer="internshipOffer"
          @change-current-internship-offer="changeCurrentInternshipOffer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InternshipOfferItem from "./InternshipOfferItem.vue";

export default {
  name: "StudentList",
  components: {
    InternshipOfferItem,
  },
  props: {
    title: String,
    internshipOffers: Array,
    errorMessage: String,
  },
  methods: {
    changeCurrentInternshipOffer(internshipOffer) {
      this.$emit("change-current-internship-offer", internshipOffer);
    },
  },
};
</script>

<style>
.cont_principal {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  color: white;
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
</style>