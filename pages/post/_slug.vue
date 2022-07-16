<template>
  <main>
    <div id="pushdown" class="w-100" style="height: 82px"></div>

    <section class="py-4">
      <div class="row">
        <div class="col-12 col-sm-8 offset-sm-2">
          <div class="badge bg-secondary text-primary mb-3">
            {{ post.badge }}
          </div>

          <h1 class="h2">{{ post.title }}</h1>

          <p>{{ post.date }}</p>
        </div>

        <div class="col-12" v-if="post.visual">
          <div class="ratio ratio-21x9 mt-3 mb-5">
            <img
              :src="require(`~/images/${post.visual.url}`)"
              :alt="post.visual.title"
              class="img-fluid rounded-3"
            />
          </div>
        </div>

        <!-- </div> -->

        <div class="col-12 col-sm-8 offset-sm-2">
          <template v-for="(section, index) in post.sections">
            <p :key="index">
              {{ section.content }}
            </p>

            <div class="my-5 img-c" v-if="section.visual" :key="'v' + index">
              <img
                :src="require(`~/images/${section.visual.url}`)"
                alt="section.visual.name"
                class="img-fluid rounded-3"
              />
            </div>
          </template>

          <social-share :title="post.title" />
        </div>
      </div>
    </section>

    <section class="h-100 py-4" id="comments">
      <div class="row min-vh-100">
        <div class="col-12 align-self-center">
          <div class="row">
            <div class="col-12 col-md-7">
              <div class="rounded-3 bg-c p-3 p-sm-4 px-xl-5 mb-5">
                <p
                  class="mb-0"
                  v-if="!post.comments || post.comments.length === 0"
                >
                  No comments yet
                </p>

                <template v-if="post.comments && post.comments.length > 0">
                  <h3 class="mb-3">Comments</h3>

                  <div
                    class="rounded-3 bg-c p-3 mb-3"
                    v-for="(c, i) in post.comments"
                    :key="i"
                  >
                    <p>{{ c.comment }}</p>

                    <span class="fw-light text-light">
                      <i class="bi bi-person"></i>
                      {{ c.name }} on {{ c.date }}
                    </span>
                  </div>
                </template>
              </div>
            </div>
            <div class="col-12 col-md-5 col-lg-4 offset-lg-1">
              <div class="rounded-3 bg-c p-3 p-sm-4 p-xl-5">
                <div class="ms-1 mb-3">
                  <i class="bi bi-chat fs-2"></i>
                </div>

                <form
                  name="comment"
                  method="POST"
                  action="/success"
                  data-netlify="true"
                  netlify-honeypot="title"
                >
                  <input type="hidden" name="form-name" value="comment" />

                  <div class="d-none">
                    <label>
                      Don’t fill this out if you’re human:
                      <input name="title" />
                    </label>
                  </div>

                  <!-- Name input -->
                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      id="name"
                      class="form-control bg-c"
                      name="name"
                      required
                      @input="getName"
                    />
                    <label class="form-label" for="name">Name</label>
                  </div>

                  <!-- Message input -->
                  <div class="form-floating mb-4">
                    <textarea
                      class="form-control h-100 bg-c"
                      id="message"
                      name="message"
                      rows="5"
                      required
                    ></textarea>
                    <label class="form-label" for="message">Comment</label>
                  </div>

                  <!-- Checkbox -->
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input me-2 bg-c"
                      type="checkbox"
                      value=""
                      name="privacy"
                      id="privacy"
                      required
                    />
                    <label class="form-check-label" for="privacy">
                      I agree to the
                      <nuxt-link to="/privacy-statement" class="text-light"
                        >privacy statement</nuxt-link
                      >
                    </label>
                  </div>

                  <!-- Submit button -->
                  <button
                    type="submit"
                    class="btn btn-secondary btn-block mb-4"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="h-100 py-4" v-if="$options.posts.list.length > 1">
      <div class="row min-vh-100">
        <div class="col-12 align-self-center">
          <h1 class="h2 mb-4">Latest posts</h1>

          <div class="row">
            <div
              class="col-12 col-md-6 mb-4"
              v-for="(a, i) in $options.posts.list
                .filter((a) => a.slug != $route.params.slug)
                .slice(0, 4)"
              :key="i"
            >
              <nuxt-link
                :to="`/post/${a.slug}`"
                class="card bg-c rounded-3 h-100"
              >
                <div class="card-body">
                  <div
                    class="badge bg-secondary text-primary mb-1"
                    v-if="a.badge"
                  >
                    {{ a.badge }}
                  </div>

                  <h3 class="card-title">{{ a.title }}</h3>

                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>

                <div class="card-footer">
                  <i
                    class="
                      bi bi-arrow-right-short
                      fs-5
                      align-middle
                      text-secondary
                    "
                  ></i>
                  <span class="align-middle">Read more</span>
                </div>
              </nuxt-link>
            </div>
          </div>

          <div class="text-center mt-3" v-if="$options.posts.list.length > 4">
            <nuxt-link to="/posts" class="btn btn-secondary">
              All posts
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import posts from "@/data/posts.json";

export default {
  posts,

  data() {
    return {
      name: false,
    };
  },

  methods: {
    getName(e) {
      // console.log(e.target.value);
      this.name = e.target.value;
    },
  },

  computed: {
    post() {
      return this.$options.posts.list.find(
        (a) => a.slug === this.$route.params.slug
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-c {
  background-color: rgba(11, 224, 212, 0.2); // rgba(6, 6, 79, 0.5);
  transition: background-color 0.4s ease-in-out;

  // &:hover {
  //   background-color: rgba(11, 224, 212, 0.25); // rgba(6, 6, 79, 0.5);
  // }
}
</style>
