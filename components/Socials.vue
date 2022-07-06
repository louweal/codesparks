<template>
  <div class="row min-vh-100 max-vh-100 sticky-top">
    <div class="col align-self-center">
      <div class="vstack gap-3 align-items-center">
        <template v-for="(s, i) in $options.socials">
          <nuxt-link
            v-if="s.url.startsWith('/')"
            :key="i"
            :to="s.url"
            class="fs-4"
          >
            <i :class="`bi bi-${s.icon}`"></i>
          </nuxt-link>
          <a :key="i" v-else :href="s.url" target="_blank" class="fs-4">
            <i :class="`bi bi-${s.icon}`"></i>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import socials from "@/data/socials.json";
export default {
  socials,
};
</script>
