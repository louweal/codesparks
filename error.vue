<template>
  <main>
    <section class="h-100">
      <div class="row min-vh-100 d-flex justify-content-center">
        <div class="col-sm-12 col-lg-6 align-self-center text-center">
          {{ error.message }}
          <h1 class="text-secondary fs-2">
            {{
              error.message ? error.message.split(":")[0] : "Page not found"
            }}
            :(
          </h1>

          <p>
            <i class="bi bi-arrow-right-short text-secondary align-middle"></i>
            <nuxt-link to="/"> Return home </nuxt-link>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
export default {
  // transition: "page",

  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
