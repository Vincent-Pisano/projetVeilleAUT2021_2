<template>
  <StudentList
    :title="title"
    :errorMessage="errorMessage"
    :students="students"
    @change-current-student="changeCurrentStudent"
  />
  <StudentModalValidCV
    v-if="displayModal"
    :student="currentStudent"
    @close-modal-event="hideModal"
    @valid-cv="validCV"
  />
</template>

<script>
import StudentList from "../StudentList.vue";
import StudentModalValidCV from "../Modal/StudentModalValidCV";
import { TITLE_STUDENT_LIST_VALID_CV } from "../../../utils/TITLE";
import { URL_GET_ALL_STUDENT_CV_NOT_VALID } from "../../../utils/API";
import axios from "axios";

export default {
  name: "StudentListValidCV",
  components: {
    StudentList,
    StudentModalValidCV,
  },
  data() {
    return {
      title: TITLE_STUDENT_LIST_VALID_CV,
      errorMessage: "",
      students: [],
      currentStudent: undefined,
      displayModal: false,
    };
  },
  computed: {
    getCurrentStudent() {
      return false;
    },
  },
  created() {
    axios
      .get(URL_GET_ALL_STUDENT_CV_NOT_VALID)
      .then((response) => {
        this.students = response.data;
      })
      .catch((error) => {
        console.error(error);
        this.errorMessage = "Erreur! Aucun CV à valider actuellement";
      });
  },
  methods: {
    showModal() {
      this.displayModal = true;
    },
    hideModal() {
      this.displayModal = false;
      this.students.filter((student) => student.id != this.currentStudent.id);
    },
    changeCurrentStudent(student) {
      this.currentStudent = student;
      this.showModal();
    },
    validCV() {
      this.students = this.students.filter(
        (student) => student.id !== this.currentStudent.id
      );
      this.displayModal = false;
      if (this.students.length === 0) {
        setTimeout(() => {
          this.$router.push("/home");
        }, 3000);
        this.errorMessage = "Plus aucun CV à Valider, vous allez être redirigé";
      }
    },
  },
};
</script>

<style>
</style>