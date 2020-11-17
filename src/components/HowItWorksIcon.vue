<template>
  <div class="icon-sizes">
    <img :alt="imageAlt" :src="getImagePath" :class="imageClass" />
    <p><slot /></p>
  </div>
</template>

<script>
export default {
  name: "HowItWorksIcon",
  props: {
    imageAlt: {
      type: String,
      required: true,
      default: null
    },
    imageSrc: {
      type: String,
      required: true,
      default: null
    },
    imageClass: {
      type: String,
      required: true,
      default: null
    }
  },
  computed: {
    getImagePath() {
      return require("@/assets/images/" + this.imageSrc);
    }
  }
};
</script>
