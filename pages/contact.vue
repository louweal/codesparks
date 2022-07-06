<template>
  <main>
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
          <form-contact />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import contact from "@/data/contact.json";

export default {
  contact,

  data() {
    return {
      name: false, // contact form name input
    };
  },

  methods: {
    getName(e) {
      // console.log(e.target.value);
      this.name = e.target.value;
    },
  },
};
</script>
