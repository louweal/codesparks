<template>
  <div class="d-flex min-vh-100 flex-column justify-content-center">
    <div>
      <div class="vstack gap-3 align-items-center">
        <template v-for="(s, i) in $options.socials">
          <a :key="i" :href="s.url" target="_blank" class="fs-4">
            <i :class="`bi bi-${s.icon} bi-24`"></i>
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
