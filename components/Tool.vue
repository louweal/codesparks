<template>
  <div class="card bg-c rounded-3 h-100">
    <div class="card-body">
      <h3 class="card-title">{{ tool.title }}</h3>

      <div
        class="hstack gap-2 flex-wrap"
        style="row-gap: 0 !important"
        v-if="tool.tech"
      >
        <div
          class="text-secondary fw-bold"
          v-for="(t, i) in tool.tech"
          :key="i"
        >
          {{ t }}
        </div>
      </div>

      <p class="card-text">
        {{ tool.content }}
      </p>
    </div>
    <div class="card-footer">
      <div class="hstack gap-3">
        <!-- <a :href="tool.repo" target="_blank" v-if="tool.repo">
          <i class="bi bi-github fs-5 align-middle me-1"></i>
          <span class="align-middle">Github</span>
        </a> -->
        <nuxt-link :to="tool.slug">
          <i class="bi bi-globe2 fs-5 align-middle me-1"></i>
          <span class="align-middle">Try it out</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tool: {
      type: [Object, Array],
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  opacity: 0;
  animation: fadeIn 0.5s cubic-bezier(0.2, 0, 0.1, 1) forwards;
}
</style>
