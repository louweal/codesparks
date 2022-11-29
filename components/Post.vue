<template>
  <nuxt-link :to="`/post/${post.slug}`" class="card bg-c rounded-3 h-100">
    <div class="card-body">
      <div class="badge bg-secondary text-primary mb-1" v-if="post.badge">
        {{ post.badge }}
      </div>

      <h3 class="card-title">{{ post.title }}</h3>

      <p class="card-text" v-if="post.intro">
        {{ post.intro }}
      </p>
    </div>

    <div class="card-footer">
      <i class="bi bi-arrow-right-short fs-5 align-middle text-secondary"></i>
      <span class="align-middle">Read more</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
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
