<template>
  <button
  class="btn btn-danger btn-sm"
  type="button"
  :click="() => (isOpen = !isOpen)"
>
  Supprimer
</button>

<CVModalConfirmeDelete />
</template>

<script>
import CVModalConfirmeDelete from "../Modal/CVModalConfirmeDelete.vue";

export default {
  name: "CVButtonDownload",
  props: {
    cv: Object,
  },
  components: {
      CVModalConfirmeDelete
  },
  data() {
    return {
        isOpen: false
    };
  },
};
</script>