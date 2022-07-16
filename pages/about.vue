<template>
  <main>
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
          * I'm planning to use another headless CMS in the future
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
  </main>
</template>

<script>
import about from "@/data/about.json";

export default {
  about,

  // transition: "home",
};
</script>
