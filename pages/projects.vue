<template>
  <main>
    <section class="h-100 py-5" id="projects">
      <div class="row min-vh-100 align-self-center">
        <div class="col-12 align-self-center">
          <h2 class="text-secondary">{{ $options.projects.title }}</h2>

          <div class="col-11 col-sm-8 col-md-6 col-lg-5 mb-5">
            <p v-for="(p, i) in $options.projects.content" :key="i">{{ p }}</p>
          </div>

          <div class="row">
            <template v-for="(p, i) in $options.projects.list">
              <div class="col-12 col-md-6 col-lg-4 mb-4" :key="i">
                <div class="card bg-c rounded-3 h-100">
                  <div class="card-body">
                    <h3 class="card-title">{{ p.title }}</h3>

                    <div
                      class="hstack gap-2 flex-wrap"
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
                      {{ p.content }}
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="hstack gap-3">
                      <a :href="p.repo" target="_blank">
                        <i class="bi bi-github fs-5 align-middle me-1"></i>
                        <span class="align-middle">Github</span>
                      </a>
                      <a :href="p.site" target="_blank">
                        <i class="bi bi-globe2 fs-5 align-middle me-1"></i>
                        <span class="align-middle">Live site</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import projects from "@/data/projects.json";

export default {
  projects,
};
</script>
