<template>
  <div class="container-fluid px-0" id="app">
    <nav-bar />
    <router-view />
    <page-footer v-if="isDesktop" />
  </div>
</template>

<script>
import Base from "@/components/Base";
import NavBar from "@/components/NavBar";
import PageFooter from "@/components/PageFooter";

export default {
  name: "App",
  extends: Base,
  components: {
    NavBar,
    PageFooter
  }
};
</script>
