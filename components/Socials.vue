<template>
  <div class="row min-vh-100 max-vh-100 sticky-top">
    <div class="col align-self-center">
      <div class="vstack gap-3 align-items-center">
        <a
          :href="s.url"
          target="_blank"
          class="fs-4"
          v-for="(s, i) in $options.socials"
          :key="i"
        >
          <i :class="`bi bi-${s.icon}`"></i>
        </a>
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
