<template>
  <div id="header" ref="header" class="header w-100 pb-3 mb-lg-3 fixed-top">
    <div class="position-absolute header__bg w-100 h-100 top-0"></div>

    <div class="px-4 pe-3 pe-lg-4">
      <div class="d-flex justify-content-between pt-3 pt-lg-g4">
        <div>
          <nuxt-link to="/" event="" @click.native="scrollToTop()">
            <img
              src="@/images/louweal.svg"
              alt="home"
              width="134"
              height="38"
            />
          </nuxt-link>
        </div>
        <div>
          <div class="d-none d-lg-block">
            <ul class="list-inline">
              <li
                class="list-inline-item px-lg-2"
                v-for="(l, i) in $options.menu"
                :key="i"
              >
                <nuxt-link :to="{ path: l.url, hash: l.hash }" class="nav-link">
                  {{ l.title }}
                </nuxt-link>
              </li>

              <li class="list-inline-item ms-lg-4 mt-4 mt-lg-0">
                <a class="btn btn-secondary" href="/resume.pdf" target="_blank">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div
            class="d-lg-none text-white"
            @click="
              $route.path === '/nav' ? $router.back() : $router.push('/nav')
            "
          >
            <i
              class="bi lh-1"
              style="font-size: 38px"
              :class="$route.path === '/nav' ? 'bi-x-lg' : 'bi-list'"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menu from "@/data/menu.json";

export default {
  menu,

  data() {
    return {
      prevPosY: 0,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.aosHeader);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.aosHeader);
  },

  methods: {
    scrollToTop() {
      if (this.$route.path === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
        this.$router.push("/");
      }
    },
    togglePushmenu() {
      document.body.classList.toggle("disable-scroll");
      this.$store.commit("togglePushmenu");
    },

    aosHeader() {
      let header = this.$refs["header"];

      if (header) {
        let scrollY = window.pageYOffset;
        let direction = scrollY > this.prevPosY ? "down" : "up";

        if (
          direction === "down" &&
          scrollY > 0 &&
          !header.classList.contains("move-up")
        ) {
          header.classList.remove("move-down");
          header.classList.add("move-up");
        }

        if (direction === "up" && !header.classList.contains("move-down")) {
          header.classList.remove("move-up");
          header.classList.add("move-down");
        }

        // update previous scroll positon
        this.prevPosY = window.scrollY;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.move-up {
  transform: translateY(-100%);
  background-color: transparent;
}

.move-down {
  transform: translateY(0);
}

.header {
  z-index: 2000;
  background-color: transparent;
  transition: all 0.4s cubic-bezier(0.2, 0, 0.1, 1); //ease-in-out;

  &__bg {
    z-index: -1;
    background: linear-gradient(
      180deg,
      rgba(#191970, 1) 30%,
      rgba(#191970, 0) 100%
    );
  }
}
</style>
