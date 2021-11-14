<template>
  <button class="btn btn-sm btn-danger" @click="showModal">
    supprimer
  </button>
  <CVModalConfirmDelete v-if="displayModal" @close-modal-event="hideModal" :cv="cv"/>

</template>

<script>
import CVModalConfirmDelete from "../Modal/CVModalConfirmDelete.vue"

export default {
  name: "CVButtonDownload",
  props: {
    cv: Object,
  },
  components: {
    CVModalConfirmDelete
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
      this.$emit("delete-cv");
    },
  },
};
</script>