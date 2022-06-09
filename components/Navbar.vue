<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-dark
      text-white
      fixed-top
      xxxbg-primary
      p-3
      px-lg-5
    "
  >
    <div class="container-fluid">
      logo
      <nuxt-link to="/">
        <!-- <img src="#" alt="" width="30" height="24" /> -->
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
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
            <a class="btn btn-secondary" href="#">Resume</a>
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
    { title: "About", url: "/#about" },
    { title: "Projects", url: "/#projects" },
    { title: "Blog", url: "/#articles" },
    { title: "Contact", url: "/#contact" },
  ],
};
</script>

<style lang="scss" scoped>
// .bg-primary {
//   // overrides default
//   background: rgb(255, 255, 255);
//   background: linear-gradient(
//     0deg,
//     rgba(255, 255, 255, 0) 0%,
//     rgba(25, 25, 112, 1) 50%
//   ) !important;
// }

// overrides

.navbar-collapse.collapse.show ul {
  // height: 100vh;
}

.navbar-toggler {
  border: none;
  box-shadow: none;
  padding: 0;
}
</style>
