<template>
  <tr>
    <td>{{ document.name }}</td>
    <td>
      <CVButtonDownload :cv="cv" />
    </td>
    <td>
      <CVButtonDelete :cv="cv" />
    </td>
    <td>
      <CVButtonActive :cv="cv" />
    </td>
    <td>
      <FontAwesomeIcon :icon="['fas', icon]" :class="style" />
    </td>
  </tr>
</template>

<script>
import CVButtonDownload from "./Button/CVButtonDownload.vue";
import CVButtonDelete from "./Button/CVButtonDelete.vue";
import CVButtonActive from "./Button/CVButtonActive.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "CVItem",
  props: {
    cv: Object,
  },
  components: {
    CVButtonDownload,
    CVButtonDelete,
    CVButtonActive,
    FontAwesomeIcon,
  },
  data() {
    return {
      document: this.cv.pdfdocument,
      icon:
        this.cv.status === "VALID"
          ? "check"
          : this.cv.status === "INVALID"
          ? "times"
          : "sync-alt",
      style: "icon " + (this.cv.status == 'VALID'
        ? 'green'
        : this.cv.status === 'INVALID'
        ? 'red'
        : 'yellow'),
    };
  }
};
</script>

<style>

.icon {
  width: 50% !important;
  height: 50% !important; 
}

.green {
  color: green;
}

.red {
  color: red;
}

.yellow {
  color: #ffc107;
}
</style>