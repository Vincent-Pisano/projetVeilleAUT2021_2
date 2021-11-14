<template>
    <tr>
  <td>{{document.name}}</td>
  <td>
    <CVButtonDownload :cv="cv"/>
  </td>
  <td>
    <CVButtonDelete :cv="cv"/>
  </td>
  <td>
    <CVButtonActive />
  </td>
  <td>
    ICON
  </td>
</tr>
</template>

<script>
import CVButtonDownload from "./Button/CVButtonDownload.vue";
  import CVButtonDelete from "./Button/CVButtonDelete.vue";
  import CVButtonActive from "./Button/CVButtonActive.vue";
  

export default {
  name: "CVItem",
  props: {
      cv: Object
  },
  components: {
    CVButtonDownload,
    CVButtonDelete,
    CVButtonActive
  },
  data() {
    return {
      document: this.cv.pdfdocument,
    };
  },
};
</script>

<style>

</style>