<template>
  <div class="row list_node" @click="changeCurrentStudent">
    <div class="col-sm-3">
        <FontAwesomeIcon :icon="['fas', icon]" style="width: 30%; height: 30%" />
    </div>
    <div class="col-sm-9 list_node_text">
      {{ student.firstName }}
      {{ student.lastName }}
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "StudentItem",
  components: {
      FontAwesomeIcon
  },
  props: {
    student: Object,
  },
  data() {
    return {
      icon:
        this.student.department === "COMPUTER_SCIENCE"
      ? 'laptop-code'
      : this.student.department === "ARCHITECTURE"
      ? 'landmark'
      : this.student.department === "NURSING"
      ? 'stethoscope'
      : 'user-circle'
    }; 
  },
  methods: {
      changeCurrentStudent() {
          this.$emit('change-current-student', this.student)
      }
  }
};
</script>

<style>
.list_node {
  background: rgba(255, 64, 88, 0.74);
  box-shadow: 0px 2px 20px 2px rgba(255, 114, 132, 0.5);
  border-radius: 8px;
  padding: 15px 30px;
  border: none;
  color: #fff;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  margin-bottom: 25px;
  align-items: center;
}

.list_node_text {
  font-size: 2rem;
  list-style-type: none;
}
</style>