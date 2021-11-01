<template>
  <button @click="onClick()" :class="{ btn_submit: isSubmitForm }">
    {{ text }}
  </button>
</template>

<button class="btn_submit">Submit</button>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    isSubmitForm: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>

<style>
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
</style>