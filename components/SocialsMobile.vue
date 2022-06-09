<template>
  <div class="d-flex justify-content-center mb-4">
    <div class="hstack gap-3">
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
</template>

<script>
import socials from "@/data/socials.json";
export default {
  socials,
};
</script>
