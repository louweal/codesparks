<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark text-white fixed-top p-md-3 px-lg-5"
  >
    <div class="container-fluid">
      <nuxt-link to="/" event="" @click.native="scrollToTop()">
        <img src="@/assets/images/louweal.svg" alt="" width="134" height="38" />
      </nuxt-link>
      <!-- <div
        @click="$route.path === '/nav' ? $router.back() : $router.push('/nav')"
        class="navbar-toggler"
        aria-label="toggle pushmenu"
      >
        <span
          class="navbar-toggler-icon"
          :class="$route.path === '/nav' ? 'navbar-toggler-icon-close' : false"
        ></span>
      </div> -->

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item px-lg-2" v-for="(l, i) in $options.menu" :key="i">
            <nuxt-link :to="{ path: l.url, hash: l.hash }" class="nav-link">
              {{ l.title }}
            </nuxt-link>
          </li>

          <li class="ms-lg-4 mt-4 mt-lg-0">
            <a class="btn btn-secondary" href="/resume.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import menu from "@/data/menu.json";

export default {
  menu,

  methods: {
    scrollToTop() {
      if (this.$route.path === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
        // this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-toggler {
  border: none;
  box-shadow: none;
  padding: 0;
}

.navbar-toggler-icon {
  width: 2.25rem;
}

$btn-close-color: #fff;
$btn-close-bg: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>");

.navbar-toggler-icon-close {
  width: 1.3rem;
  height: 1.3rem;
  background-image: $btn-close-bg;
}
</style>
