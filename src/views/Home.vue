<template>
  <div>
    <div class="container-fluid">
      <div class="recycle-content">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 recycle-header-margin">
            <h2>Recycle your Nespresso in style!</h2>
            <p class="recycle-subheader-margin d-none d-sm-block">
              We can recycle your coffee pods for cashback or free coffee!
            </p>
            <img
              alt="Download IOS App"
              src="../assets/images/app-store.png"
              class="mt-3 mt-lg-0 d-md-block d-lg-inline"
            />
            <img
              alt="Download Android App"
              src="../assets/images/google-play.png"
              class="ml-0 ml-lg-3 mt-3 mt-lg-0 d-md-block d-lg-inline"
            />
          </div>
          <div class="col-md-6 px-2 px-md-0 px-lg-2">
            <div class="app-image-container">
              <img
                alt="App Mock Up"
                src="../assets/images/app-mockup-cropped.png"
                class="app-mockup-margin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <how-it-works v-if="!isMobile" />
    <prices v-if="isDesktop" />
    <map-locations v-if="isDesktop" />
  </div>
</template>

<script>
import Base from "@/components/Base";
import HowItWorks from "@/components/HowItWorks";
import Prices from "@/components/Prices";
import MapLocations from "@/components/MapLocations";

export default {
  name: "Home",
  extends: Base,
  components: {
    HowItWorks,
    Prices,
    MapLocations
  }
};
</script>
