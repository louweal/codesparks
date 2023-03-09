<template>
  <main>
    <div class="text-center">
      <h1 class="text-secondary fs-2">
        {{ error ? error.message : "Page not found" }} :(
      </h1>

      <p>
        <i class="bi bi-arrow-right-short text-secondary align-middle"></i>
        <nuxt-link to="/"> Return home </nuxt-link>
      </p>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
