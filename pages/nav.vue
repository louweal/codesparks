<template>
  <main>
    <section class="h-100 py-5" id="contact">
      <div class="row justify-content-center" style="min-height: 75vh">
        <div class="align-self-center text-center">
          <ul class="list-unstyled">
            <li class="nav-item" v-for="(l, i) in $options.menu" :key="i">
              <nuxt-link
                :to="{ path: l.url, hash: l.hash }"
                class="nav-link fs-3"
              >
                {{ l.title }}
              </nuxt-link>
            </li>
          </ul>
          <a class="btn btn-secondary mt-2" href="/resume.pdf" target="_blank">
            Resume
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import menu from "@/data/menu.json";

export default {
  menu,
};
</script>
