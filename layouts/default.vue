<template>
  <div id="top">
    <sparkles />

    <navbar />
    <!-- <div id="pushdown" style="width: 100%; height: 82px"></div> -->

    <div class="container-lg">
      <div class="row">
        <div class="col-12 col-sm-10 order-sm-last">
          <Nuxt />

          <div class="d-sm-none">
            <socials-mobile />
          </div>

          <Footer />
        </div>

        <div class="d-none d-sm-block col-sm-1 order-sm-first">
          <socials />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let Splitting = null;

if (process.client) {
  Splitting = require("splitting");
}

export default {
  name: "Default",

  methods: {
    beforeEnter: function (el) {
      if (this.$route.hash[0] !== "#") {
        window.scrollTo(0, 0);
      }
    },

    afterEnter: function (el, done) {},

    sos() {
      let animTargets = document.querySelectorAll("[data-sos]");
      [].forEach.call(animTargets, (target) => {
        let startAt = parseInt(target.dataset.sos);
        var rect = target.getBoundingClientRect();
        var elemTop = rect.top;

        let startTrigger =
          elemTop < window.innerHeight * (startAt / 100) && elemTop > 0;

        if (startTrigger) {
          if (!target.classList.contains("splitting")) {
            target.style.opacity = "1";
            this.initSplitting(target);
          }
        }
      });
    },

    aos() {
      // console.log("aos");
      let animTargets = document.querySelectorAll("[data-aos]");
      [].forEach.call(animTargets, (target) => {
        let startAt = parseInt(target.dataset.aos);
        let rect = target.getBoundingClientRect();
        let elemTop = rect.top;

        target.style.opacity = "0"; // hide element by default

        let startTrigger =
          elemTop < window.innerHeight * (startAt / 100) && elemTop > 0;

        if (startTrigger) {
          if (!target.classList.contains("start-animation")) {
            target.classList.add("start-animation");
          }
        }
      });
    },
    initSplitting: function (target) {
      Splitting({
        target: target,
        by: "chars",
        key: null,
      });
    },
  },

  mounted() {
    this.aos();
    window.addEventListener("scroll", this.aos);

    this.sos();
    window.addEventListener("scroll", this.sos);

    let gaScript = document.createElement("script");
    gaScript.setAttribute(
      "src",
      "https://www.googletagmanager.com/gtag/js?id=G-HNSQMHP9VF"
    );
    document.head.appendChild(gaScript);
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-HNSQMHP9VF");
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.sos);
  },
};
</script>
