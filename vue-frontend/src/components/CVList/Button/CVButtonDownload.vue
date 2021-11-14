<template>
  <a
    class="btn btn-success btn-sm"
    :href="`${url}/${user.id}/${cv.id}`"
    target="_blank"
    rel="noreferrer"
  >
    Télécharger
  </a>
</template>

<script>
import { URL_DOWNLOAD_CV } from "../../../utils/API";
import auth from "../../../services/Auth";

export default {
  name: "CVButtonDownload",
  props: {
    cv: Object,
  },
  data() {
    return {
      user: auth.getUser(),
      url: URL_DOWNLOAD_CV,
    };
  },
};
</script>