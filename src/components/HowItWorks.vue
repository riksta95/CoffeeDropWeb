<template>
  <div class="how-it-works">
    <h5 class="text-center font-weight-bold mb-4">How it works</h5>
    <div class="d-flex text-center">
      <how-it-works-icon
        image-alt="Coffee Machine"
        image-src="coffee-machine-icon.svg"
        image-class="how-it-works-icon"
      >
        You can now save the planet in style, thanks to cashback for your
        nespresso pods at any of our sixteen locations nationwide.
      </how-it-works-icon>
      <div>
        <img
          alt="Arrow"
          src="../assets/images/arrow-transparent.png"
          class="arrow"
        />
      </div>
      <how-it-works-icon
        image-alt="Coffee Bag"
        image-src="coffee-bag-icon.svg"
        image-class="how-it-works-icon"
      >
        Simply bring in your used pods, place them in an approved CoffeeDrop bag
        and bring them into store.
      </how-it-works-icon>
      <div>
        <img
          alt="Arrow"
          src="../assets/images/arrow-transparent.png"
          class="arrow"
        />
      </div>
      <how-it-works-icon
        image-alt="Staff"
        image-src="staff-icon.svg"
        image-class="how-it-works-icon"
      >
        Our trained staff will quickly calculate your cashback - or better
        still, you can do it yourself on our handy App available on iOS or
        Android
      </how-it-works-icon>
    </div>
  </div>
</template>

<script>
import HowItWorksIcon from "@/components/HowItWorksIcon";

export default {
  name: "HowItWorks",
  components: {
    HowItWorksIcon
  }
};
</script>
