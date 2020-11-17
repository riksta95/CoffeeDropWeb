<template>
  <div class="container-fluid" id="nav">
    <div class="row mr-0">
      <div class="col-8 col-sm-3 px-0 float-left">
        <img
          alt="Coffee Drop"
          src="../assets/images/coffee-drop-logo.png"
          class="main-logo"
        />
      </div>
      <div class="col-3 col-md-8 offset-1 offset-sm-0 offset-lg-1">
        <div v-if="isTabletPortrait">
          <Slide right>
            <nav-items />
          </Slide>
        </div>
        <nav-items v-else />
      </div>
    </div>
  </div>
</template>

<script>
import Base from "@/components/Base";
import NavItems from "@/components/NavItems";
import { Slide } from "vue-burger-menu";

export default {
  name: "NavBar",
  extends: Base,
  components: {
    NavItems,
    Slide
  }
};
</script>
