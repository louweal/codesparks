<template>
  <main v-if="post">
    <div id="pushdown" class="w-100" style="height: 82px"></div>

    <section class="py-4">
      <div class="row">
        <div class="col-12 col-sm-8 col-md-6 offset-sm-2">
          <nuxt-link :to="{ path: '/', hash: '#posts' }">
            <i class="bi bi-arrow-left-short text-secondary align-middle"></i>
            Back
          </nuxt-link>

          <h1 class="h2">{{ post.title }}</h1>

          <p class="font-small">{{ post.date }}</p>
        </div>

        <div class="col-12" v-if="post.visual && post.visual.url">
          <div class="ratio ratio-21x9 mt-3 mb-5">
            <img
              :src="require(`~/images/${post.visual.url}`)"
              :alt="post.visual.title"
              class="img-fluid rounded-3"
            />
          </div>
        </div>

        <div class="col-12 col-sm-8 offset-sm-2">
          <template v-for="(section, index) in post.sections">
            <h2 v-if="section.title" :key="'t' + index" class="h3">
              {{ section.title }}
            </h2>

            <template v-if="section.video">
              <video controls :key="'v' + index">
                <source
                  :src="require(`~/videos/${section.video.url}`)"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <small :key="'caption' + index">
                {{ section.video.caption }}
              </small>
            </template>

            <p :key="'c' + index">
              {{ section.content }}
            </p>

            <div class="my-5 img-c" v-if="section.visual" :key="'i' + index">
              <img
                :src="require(`~/images/${section.visual.url}`)"
                alt="section.visual.name"
                class="img-fluid rounded-3"
              />
            </div>
          </template>

          <div class="hstack gap-3">
            <a :href="post.devpost" target="_blank" v-if="post.devpost">
              <i class="bi bi-devpost bi-24 fs-5 align-middle me-1"></i>
              <span class="align-middle">Devpost</span>
            </a>
            <a :href="post.site" target="_blank" v-if="post.site">
              <i class="bi bi-globe2 fs-5 align-middle me-1"></i>
              <span class="align-middle">Live site</span>
            </a>
          </div>

          <social-share :title="post.title" />
        </div>
      </div>
    </section>

    <section class="h-100 py-5" id="comments">
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
                  action="/post/success"
                  data-netlify="true"
                  netlify
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

    <section class="h-100 py-5" v-if="otherPosts.length > 1">
      <div class="row min-vh-100">
        <div class="col-12 align-self-center">
          <h1 class="h2 mb-4">Latest posts</h1>
          <div class="row">
            <div
              class="col-12 col-md-6 mb-4"
              v-for="(a, i) in otherPosts"
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
                    {{ a.intro }}
                  </p>
                </div>

                <div class="card-footer">
                  <i
                    class="bi bi-arrow-right-short fs-5 align-middle text-secondary"
                  ></i>
                  <span class="align-middle">Read more</span>
                </div>
              </nuxt-link>
            </div>
          </div>

          <div
            class="text-center mt-3"
            v-if="$options.posts.length > otherPosts.length"
          >
            <nuxt-link
              :to="{ path: '/', hash: '#posts' }"
              class="btn btn-secondary"
            >
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
      post: undefined,
    };
  },

  fetch() {
    this.validatePage();
  },

  created() {
    this.post = this.$options.posts.find(
      (a) => a.slug === this.$route.params.slug
    );
  },

  computed: {
    otherPosts() {
      let other = this.$options.posts.filter((a) => a.publish === true);
      other = other.filter((a) => a.slug != this.$route.params.slug);
      return other.slice(0, other.length === 3 ? 2 : 4);
    },
  },

  methods: {
    validatePage() {
      if (!this.post) {
        return this.$nuxt.error({
          statusCode: 404,
          message: "Post not found",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
video {
  width: 100%;
}
</style>
