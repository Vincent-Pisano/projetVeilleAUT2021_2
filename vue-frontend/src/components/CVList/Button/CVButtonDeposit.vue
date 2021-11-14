<template>
  <Button @btn-click="showModal" :style="'btn_link'" :disabled="false"
    >Déposer un CV</Button
  >
  <CVModalDeposit v-if="displayModal" @close-modal-event="hideModal" />
</template>

<script>
import CVModalDeposit from "../Modal/CVModalDeposit.vue";
import Button from "../../Button.vue";

export default {
  components: {
    CVModalDeposit,
    Button,
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