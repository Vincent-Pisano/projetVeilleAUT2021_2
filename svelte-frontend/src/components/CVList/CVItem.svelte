<script>
  import CVButtonDownload from "./Button/CVButtonDownload.svelte";
  import CVButtonDelete from "./Button/CVButtonDelete.svelte";
  import CVButtonActive from "./Button/CVButtonActive.svelte";
  import Icon from "svelte-awesome";
  import {
    faCheck,
    faTimes,
    faSyncAlt,
  } from "@fortawesome/free-solid-svg-icons";
  export let cv;

  let document = cv.pdfdocument;
</script>

<tr>
  <td>{document.name}</td>
  <td>
    <CVButtonDownload {cv} />
  </td>
  <td>
    <CVButtonDelete {cv} />
  </td>
  <td>
    <CVButtonActive {cv} />
  </td>
  <td>
    <Icon
      data={cv.status === "VALID"
        ? faCheck
        : cv.status === "INVALID"
        ? faTimes
        : faSyncAlt}
      style="{'color: ' + 
        (cv.status == 'VALID'
        ? 'green'
        : cv.status === 'INVALID'
        ? 'red'
        : '#ffc107')};
        width:50%;
        height:50%"
    />
  </td>
</tr>

<style>
</style>
