<script>
  import StudentList from "../StudentList.svelte";
  import StudentModalValidCV from "../Modal/StudentModalValidCV.svelte";
  import { TITLE_STUDENT_LIST_VALID_CV } from "../../../Utils/TITLE";
  import { URL_GET_ALL_STUDENT_CV_NOT_VALID } from "../../../Utils/API";
  import axios from "axios";
  import { navigate } from "svelte-routing";

  export let location;
  if (location == null) {
    console.error("an error occured during the routing");
  }

  let title = TITLE_STUDENT_LIST_VALID_CV;
  let isOpen = false;
  let students = [];
  let errorMessage = "";
  let currentStudent = {};

  axios
    .get(URL_GET_ALL_STUDENT_CV_NOT_VALID)
    .then((response) => {
      students = response.data;
    })
    .catch((error) => {
      errorMessage = "Erreur! Aucun CV à valider actuellement";
    });

  function changeCurrentStudent(event) {
    currentStudent = event.detail;
    if (isOpen) isOpen = false;
    isOpen = true;
  }

  function validCV() {
    students = students.filter((student) => student.id !== currentStudent.id);
    isOpen = false;
    if (students.length === 0) {
      setTimeout(() => {
        navigate("/home");
      }, 3000);
      errorMessage = "Plus aucun CV à Valider, vous allez être redirigé";
    }
  }
</script>

<StudentList
  {title}
  {students}
  {errorMessage}
  on:click={changeCurrentStudent}
/>
<StudentModalValidCV {isOpen} {currentStudent} on:valid-cv={validCV} />

<style>
</style>
