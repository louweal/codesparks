<template>
  <div id="app">
    <sparkles />

    <Header />

    <div class="container-lg">
      <div class="row">
        <div class="col-12 col-sm-10 order-sm-last">
          <slot />

          <div class="d-sm-none">
            <socials-mobile />
          </div>

          <Footer v-if="$route.path !== '/nav'" />
        </div>

        <div class="d-none d-sm-block col-sm-1 order-sm-first">
          <socials />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Default",

  transition: "page",
};
</script>
