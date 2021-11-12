<script>
      import { currentUser } from "../../../services/Store";
      import { URL_DOWNLOAD_CV } from "../../../utils/API";

      export let cv;
</script>

<a
      class="btn btn-success btn-sm"
      href={`${URL_DOWNLOAD_CV}/${$currentUser.id}/${cv.id}`}
      target="_blank"
      rel="noreferrer"
    >
      Télécharger
    </a>

<style>
    
</style>