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
export default {
  name: "Default",
};
</script>
