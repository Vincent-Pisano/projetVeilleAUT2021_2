<template>
  <button @click="onClick" :class="style" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    style: String,
    id: {
      type: String,
      required: false,
      default: "Submit",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  methods: {
    onClick(event) {
      event.preventDefault();
      this.$emit("btn-click", this.id);
    },
  },
};
</script>

<style scoped>
.btn_submit {
  background: rgba(255, 64, 88, 0.74);
  box-shadow: 0px 2px 20px 2px rgba(255, 114, 132, 0.5);
  border-radius: 8px;
  padding: 15px 30px;
  border: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

button:disabled {
  background: rgba(214, 47, 70, 0.74) !important;
  cursor: wait;
}

.btn_link {
  background: linear-gradient(-87deg, #aeb4b4 40%, #9bacb3 100%);
  box-shadow: 0px 2px 20px 2px rgba(192, 220, 223, 0.5);
  border-radius: 8px;
  padding: 15px 20px;
  border: none;
  color: #fff;
  font-size: 15px;
  float: none;
  cursor: pointer;
  list-style: none;
  text-decoration: none;
}

.btn_link_selected {
  background: rgba(255, 64, 88, 0.74) !important;
  box-shadow: 0px 2px 20px 2px rgba(255, 114, 132, 0.5) !important;
}
</style>