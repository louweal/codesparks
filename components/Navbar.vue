<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-dark
      text-white
      fixed-top
      p-md-3
      px-lg-5
    "
  >
    <div class="container-fluid">
      <nuxt-link
        to="/"
        class="d-lg-block"
        xxxclass="$route.path === '/nav' ? 'd-block' : 'd-none'"
      >
        <img src="@/images/logo.svg" alt="" width="37" height="24" />
      </nuxt-link>
      <div>
        <!-- empty -->
      </div>
      <div
        @click="$route.path === '/nav' ? $router.back() : $router.push('/nav')"
        class="navbar-toggler"
        aria-label="toggle pushmenu"
      >
        <span
          class="navbar-toggler-icon"
          :class="$route.path === '/nav' ? 'navbar-toggler-icon-close' : false"
        ></span>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li
            class="nav-item px-lg-2"
            v-for="(l, i) in $options.links"
            :key="i"
          >
            <nuxt-link :to="l.url" class="nav-link">
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

<script>
export default {
  links: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Posts", url: "/posts" },
    { title: "Contact", url: "/contact" },
  ],
};
</script>

<style lang="scss" scoped>
.navbar-toggler {
  border: none;
  box-shadow: none;
  padding: 0;
}

$btn-close-color: #fff;
$btn-close-bg: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>");

.navbar-toggler-icon-close {
  // margin: 0.25rem;
  width: 1.3rem;
  height: 1.3rem;
  background-image: $btn-close-bg;
}
</style>
