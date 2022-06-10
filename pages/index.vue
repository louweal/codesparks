<template>
  <main>
    <hero />

    <section class="h-100 py-4" id="about">
      <div class="row min-vh-100">
        <div class="col-12 col-md-6 align-self-center mb-5 mb-md-0">
          <h2 class="text-secondary">{{ $options.about.title }}</h2>

          <p v-for="(p, i) in $options.about.content" :key="i">{{ p }}</p>

          <div class="row mb-3">
            <div
              class="col-6 col-sm-4"
              v-for="(t, i) in $options.about.tech"
              :key="i"
            >
              <i
                class="bi bi-arrow-right-short text-secondary align-middle"
              ></i>
              {{ t }}
            </div>
          </div>
          * planning to use only
          <a href="#" class="text-secondary">Sanity</a> or another headless CMS
          in the future
        </div>

        <div
          class="
            col-10
            offset-1
            col-sm-8
            offset-sm-2
            col-md-5
            offset-md-1
            col-xl-5
            align-self-center
          "
        >
          <div class="img-c">
            <img
              :src="require(`~/images/${$options.about.visual}`)"
              alt="anneloes"
              class="img-fluid rounded-3"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="h-100 py-4" id="projects">
      <div class="row min-vh-100 align-self-center">
        <div class="col-12 align-self-center">
          <h2 class="text-secondary">{{ $options.projects.title }}</h2>

          <div class="col-11 col-sm-8 col-md-6 col-lg-5 mb-5">
            <p v-for="(p, i) in $options.projects.content" :key="i">{{ p }}</p>
          </div>

          <div class="row">
            <template v-for="(p, i) in $options.projects.list">
              <div
                class="col-12 col-md-6 col-lg-4 mb-4"
                :key="i"
                v-if="i < numProjects"
              >
                <div class="card bg-c rounded-3 h-100">
                  <div class="card-body">
                    <h3 class="card-title">{{ p.title }}</h3>

                    <div
                      class="hstack gap-2 row-gap-0 flex-wrap"
                      style="row-gap: 0 !important"
                      v-if="p.tech"
                    >
                      <div
                        class="text-secondary fw-bold"
                        v-for="(t, i) in p.tech"
                        :key="i"
                      >
                        {{ t }}
                      </div>
                    </div>

                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="hstack gap-3">
                      <a href="#" target="_blank">
                        <i class="bi bi-github fs-5 align-middle me-1"></i>
                        <span class="align-middle">Github</span>
                      </a>
                      <a href="#" target="_blank">
                        <i class="bi bi-globe2 fs-5 align-middle me-1"></i>
                        <span class="align-middle">Live site</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <div
              class="text-center mt-3"
              v-if="$options.projects.list.length > numProjects"
            >
              <div class="btn btn-secondary" @click="loadMoreProjects">
                More projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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

            <div
              class="text-center mt-3"
              v-if="$options.posts.list.length > numPosts"
            >
              <div class="btn btn-secondary" @click="loadMorePosts">
                More posts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="h-100 py-4" id="contact">
      <div class="row min-vh-100">
        <div class="col-12 col-md-5 align-self-center mb-5 mb-md-0">
          <h2 class="text-secondary">{{ $options.contact.title }}</h2>

          <p v-for="(p, i) in $options.contact.content" :key="i">{{ p }}</p>

          <div class="vstack gap-1">
            <a
              :href="s.url"
              target="_blank"
              class=""
              v-for="(s, i) in $options.socials"
              :key="i"
            >
              <i :class="`bi bi-${s.icon} me-2 align-middle`"></i>
              <span class="align-middle">{{ s.title }}</span>
            </a>
          </div>
        </div>

        <div
          class="
            col-12 col-md-7
            offset-lg-1
            col-lg-6 col-xl-5
            align-self-center
          "
        >
          <div class="rounded-3 bg-c p-3 p-sm-4 p-xl-5">
            <div class="ms-1 mb-3">
              <i class="bi bi-envelope-open fs-2"></i>
            </div>

            <div v-if="$route.query.state === 'success'">
              <p>
                Thank you for your message {{ $route.query.name }}! I'll get
                back to you as soon as possible.
              </p>
            </div>

            <form
              v-else
              name="contact"
              method="POST"
              :action="`${$route.path}?state=success&name=${name}#contact`"
              data-netlify="true"
              netlify-honeypot="title"
            >
              <input type="hidden" name="form-name" value="contact" />

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

              <!-- Email input -->
              <div class="form-floating mb-4">
                <input
                  type="email"
                  id="email"
                  class="form-control bg-c"
                  name="email"
                  required
                />
                <label class="form-label" for="email">E-mail</label>
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
                <label class="form-label" for="message">Message</label>
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
              <button type="submit" class="btn btn-secondary btn-block mb-4">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import about from "@/data/about.json";
import projects from "@/data/projects.json";
import posts from "@/data/posts.json";
import socials from "@/data/socials.json";
import contact from "@/data/contact.json";

export default {
  name: "Main",

  transition: "home",

  about,
  projects,
  posts,
  socials,
  contact,

  data() {
    return {
      numProjects: 6,
      numPosts: 4,
      name: false, // contact form name input
    };
  },

  methods: {
    loadMoreProjects() {
      this.numProjects += 3;
    },
    loadMorePosts() {
      this.numPosts += 4;
    },
    getName(e) {
      // console.log(e.target.value);
      this.name = e.target.value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
