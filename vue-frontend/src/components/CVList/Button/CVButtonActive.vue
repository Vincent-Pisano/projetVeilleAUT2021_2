<template>
  <button class="btn btn-sm btn-warning" @click="showModal" :disabled="cv.isActive">
    {{cv.isActive ? "Déjà Actif" : "Mettre Actif"}}
  </button>
  <CVModalConfirmActive v-if="displayModal" @close-modal-event="hideModal" />

</template>

<script>
import CVModalConfirmActive from "../Modal/CVModalConfirmActive.vue"

export default {
  name: "CVButtonDownload",
  props: {
    cv: Object,
  },
  components: {
    CVModalConfirmActive
  },
  data() {
    return {
      displayModal: false,
    };
  },
  methods: {
    showModal() {
      this.displayModal = true;
    },
    hideModal() {
      this.displayModal = false;
    },
  },
};
</script>