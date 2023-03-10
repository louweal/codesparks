<template>
  <main>
    <hero />

    <section id="about">
      <div class="row min-vh-100 py-5">
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
        </div>

        <div
          class="col-10 offset-1 col-sm-8 offset-sm-2 col-md-5 offset-md-1 col-xl-5 align-self-center"
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

    <section id="projects">
      <div class="row min-vh-100 py-5">
        <div class="col-12 align-self-center">
          <h2 class="text-secondary">Projects</h2>

          <div class="col-11 col-sm-8 col-md-6 col-lg-5 mb-5">
            <p>
              These are my personal projects, which enabled me to learn new
              skills suchs as web3 development and 3D graphic design.
            </p>
          </div>

          <div class="row">
            <div
              class="col-12 col-md-6 col-lg-4 mb-4"
              :key="i"
              v-for="(p, i) in $options.projects.slice(
                0,
                $store.state.maxProjects
              )"
            >
              <project :project="p" />
            </div>

            <div
              class="text-center mt-3"
              v-if="$options.projects.length > $store.state.maxProjects"
            >
              <div class="btn btn-secondary" @click="loadMoreProjects()">
                More projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="tools" v-if="$options.tools.length > 0">
      <div class="row min-vh-100 py-5">
        <div class="col-12 align-self-center">
          <h2 class="text-secondary">Tools</h2>

          <div class="col-11 col-sm-8 col-md-6 col-lg-5 mb-5">
            <p>
              These are some tools I build for my fellow Hederians /
              HBARbarians.
            </p>
          </div>

          <div class="row">
            <div
              class="col-12 col-md-6 col-lg-4 mb-4"
              :key="i"
              v-for="(p, i) in $options.tools.slice(0, $store.state.maxTools)"
            >
              <tool :tool="p" />
            </div>

            <div
              class="text-center mt-3"
              v-if="$options.tools.length > $store.state.maxTools"
            >
              <div class="btn btn-secondary" @click="loadMoreTools()">
                More tools
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="posts">
      <div class="row min-vh-100 py-5">
        <div class="col-12 align-self-center">
          <h2 class="text-secondary">Posts</h2>

          <div class="col-11 col-sm-8 col-md-6 col-lg-5 mb-5">
            <p>
              Here I publish my thoughs, technical articles, updates and
              everything in between.
            </p>
          </div>

          <div class="row">
            <div
              class="col-12 col-md-6 mb-4"
              v-for="(p, i) in $options.posts.slice(0, $store.state.maxPosts)"
              :key="i"
            >
              <post :post="p" />
            </div>

            <div
              class="text-center mt-3"
              v-if="$options.posts.length > $store.state.maxPosts"
            >
              <div class="btn btn-secondary" @click="loadMorePosts()">
                More posts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="row min-vh-100 py-5">
        <div class="col-12 col-md-5 align-self-center mb-5 mb-md-0">
          <h2 class="text-secondary">{{ $options.contact.title }}</h2>

          <p v-for="(p, i) in $options.contact.content" :key="i">{{ p }}</p>

          <div class="row xxxmb-3">
            <div class="col-6" v-for="(s, i) in $options.socials" :key="i">
              <a :href="s.url" target="_blank">
                <i :class="`bi bi-${s.icon} bi-16 me-2 align-middle`"></i>
                <span class="align-middle">{{ s.title }}</span>
              </a>
            </div>
          </div>
        </div>

        <div
          class="col-12 col-md-7 offset-lg-1 col-lg-6 col-xl-5 align-self-center"
        >
          <form-contact />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import about from "@/data/about.json";
import projects from "@/data/projects.json";
import tools from "@/data/tools.json";
import posts from "@/data/posts.json";
import socials from "@/data/socials.json";
import contact from "@/data/contact.json";

export default {
  name: "Main",

  transition: "page",

  about,
  projects: projects.filter((p) => p.publish === true),
  tools: tools.filter((p) => p.publish === true),
  posts: posts.filter((p) => p.publish === true),
  socials,
  contact,

  methods: {
    loadMoreProjects() {
      this.$store.commit(
        "updateMaxProjects",
        this.$store.state.maxProjects + 3
      );
    },
    loadMoreTools() {
      this.$store.commit("updateMaxTools", this.$store.state.maxTools + 3);
    },

    loadMorePosts() {
      this.$store.commit("updateMaxPosts", this.$store.state.maxPosts + 2);
    },
  },
};
</script>

<style lang="scss" scoped></style>
