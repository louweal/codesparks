<template>
  <main>
    <section class="h-100 py-4" id="posts">
      <div class="row min-vh-100 align-self-center">
        <div class="col-12 align-self-center">
          <h2 class="text-secondary">{{ $options.posts.title }}</h2>

          <div class="col-11 col-sm-8 col-md-6 col-lg-5 mb-5">
            <p v-for="(p, i) in $options.posts.content" :key="i">{{ p }}</p>
          </div>

          <div class="row">
            <div
              class="col-12 col-md-6 mb-4"
              v-for="(a, i) in $options.posts.list.slice(0, numPosts)"
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

                  <p class="card-text" v-if="a.intro">
                    {{ a.intro }}
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
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import posts from "@/data/posts.json";

export default {
  posts,
};
</script>
