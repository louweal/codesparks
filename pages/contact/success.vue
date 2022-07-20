<template>
  <main>
    <section class="h-100 py-5" id="contact">
      <div class="row" style="min-height: 90vh">
        <div class="col-12 col-md-5 align-self-center mb-5 mb-md-0">
          <h2 class="text-secondary">{{ $options.contact.title }}</h2>

          <p v-for="(p, i) in $options.contact.content" :key="i">{{ p }}</p>

          <div class="row mb-3">
            <div class="col-6" v-for="(s, i) in $options.socials" :key="i">
              <a :href="s.url" target="_blank">
                <i :class="`bi bi-${s.icon} bi-16 me-2 align-middle`"></i>
                <span class="align-middle">{{ s.title }}</span>
              </a>
            </div>
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
          <!-- <form-contact /> -->

          <div class="rounded-3 bg-c p-3 p-sm-4 p-xl-5">
            <div class="ms-1 mb-3">
              <i class="bi bi-envelope-open fs-2"></i>
            </div>

            <p>
              Thank you for your message! I'll get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import contact from "@/data/contact.json";

export default {
  contact,
};
</script>
