<script>
export default {
  name: "Base",
  data() {
    return {
      isMobile: true,
      isTabletPortrait: true,
      isDesktop: true
    };
  },
  methods: {
    handleResize() {
      this.isMobile = !window.matchMedia("(min-width: 480px)").matches;
      this.isTabletPortrait = !window.matchMedia("(min-width: 769px)").matches;
      this.isDesktop = window.matchMedia("(min-width: 1025px)").matches;
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("load", this.handleResize);
  }
};
</script>
