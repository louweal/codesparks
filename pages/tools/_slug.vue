<template>
  <main v-if="post">
    <div id="pushdown" class="w-100" style="height: 82px"></div>

    <section class="h-100 py-5">
      <div class="row min-vh-100">
        <div class="col-12 align-self-center">
          <div class="row">
            <div class="col-12 col-md-7">
              <div class="rounded-3 bg-c p-3 p-sm-4 px-xl-5 mb-5">hello</div>
            </div>
            <div class="col-12 col-md-5 col-lg-4 offset-lg-1">
              <div class="rounded-3 bg-c p-3 p-sm-4 p-xl-5">hello</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import posts from "@/data/tools.json";

export default {
  posts,

  data() {
    return {
      tool: undefined,
    };
  },

  fetch() {
    this.validatePage();
  },

  created() {
    this.tool = this.$options.tools.find(
      (a) => a.slug === this.$route.params.slug
    );
  },

  methods: {
    validatePage() {
      if (!this.post) {
        return this.$nuxt.error({
          statusCode: 404,
          message: "Tool not found",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
