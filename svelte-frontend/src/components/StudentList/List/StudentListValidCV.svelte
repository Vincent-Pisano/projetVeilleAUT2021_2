<script>
  import StudentList from "../StudentList.svelte";
  import StudentListModalValidCV from "../Modal/StudentListModalValidCV.svelte";
  import { TITLE_STUDENT_LIST_VALID_CV } from "../../../Utils/TITLE";
  import { URL_GET_ALL_STUDENT_CV_NOT_VALID } from "../../../Utils/API";
  import axios from "axios";

  export let location;
  if (location == null) {
    console.error("an error occured during the routing");
  }

  let title = TITLE_STUDENT_LIST_VALID_CV
  let isOpen = false;
  let students = [];
  let errorMessage = "";
  $: currentStudent = {};
  
  axios
    .get( URL_GET_ALL_STUDENT_CV_NOT_VALID)
    .then((response) => {
        console.log("appel axios");
        students = response.data;
    })
    .catch((error) => {
        errorMessage = "Erreur! Aucun CV à valider actuellement";
    });

    function changeCurrentStudent(student) {
        console.log("change CurrentStudent");
        currentStudent = student;
        isOpen = !isOpen;
    }
</script>

<StudentList {title} {students} {errorMessage} on:click={changeCurrentStudent}/>
<StudentListModalValidCV {isOpen} {currentStudent}/>

<style>
    
</style>