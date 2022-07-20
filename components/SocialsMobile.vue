<template>
  <div class="d-flex justify-content-center mb-4">
    <div class="hstack gap-3 d-flex align-items-center">
      <a
        :href="s.url"
        target="_blank"
        class="fs-4 d-block"
        v-for="(s, i) in $options.socials"
        :key="i"
      >
        <i :class="`bi bi-${s.icon} bi-24`"></i>
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

<style lang="scss" scoped>
// fixes positioning of custom icons...
.bi-codewars,
.bi-dev {
  margin-top: 9px;
}
</style>
