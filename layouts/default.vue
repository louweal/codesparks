<template>
  <div id="app">
    <sparkles />

    <Header ref="header" />

    <div class="container-lg">
      <div class="row">
        <div class="col-12 col-sm-10 order-sm-last mt-5 mt-sm-0">
          <div class="min-vh-100 d-flex flex-column justify-content-between">
            <div>
              <div ref="pushdown" class="w-100 mb-2 mb-md-3 mb-lg-4"></div>
            </div>

            <div>
              <Nuxt />

              <div class="d-sm-none mt-3">
                <socials-mobile />
              </div>
            </div>

            <Footer v-if="$route.path !== '/nav'" />
          </div>
        </div>

        <div
          class="d-none d-sm-flex col-sm-1 order-sm-first max-vh-100 flex-column sticky-top h-100 max-vh-100"
        >
          <socials />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    let header = this.$refs["header"];
    let headerHeight = header ? header.offsetHeight : 0;
    let pushdown = this.$refs["pushdown"];
    pushdown.style.height = headerHeight + "px";

    // console.log(this.$route.params);
  },
};
</script>
