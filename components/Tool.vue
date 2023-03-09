<template>
  <div class="card bg-c rounded-3 h-100">
    <div class="card-body">
      <h3 class="card-title">{{ tool.title }}</h3>

      <p class="card-text">
        {{ tool.content }}
      </p>

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
    </div>
    <div class="card-footer" v-if="tool.link">
      <nuxt-link :to="'tool/' + tool.link.slug" v-if="tool.link.slug">
        <i
          class="bi fs-5 align-middle me-1"
          :class="`bi-${tool.link.icon}`"
        ></i>
        <span class="align-middle">{{ tool.link.title }}</span>
      </nuxt-link>
      <a :href="tool.link.url" v-if="tool.link.url" target="_blank">
        <i
          class="bi fs-5 align-middle me-1"
          :class="`bi-${tool.link.icon}`"
        ></i>
        <span class="align-middle">{{ tool.link.title }}</span>
      </a>
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
