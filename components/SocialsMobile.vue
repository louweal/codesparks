<template>
  <div class="d-flex justify-content-center mb-4">
    <div class="hstack gap-3 d-flex align-items-center">
      <a
        :href="s.url"
        target="_blank"
        class="fs-4 d-block"
        v-for="s in socials"
        xxxkey="i"
      >
        <i :class="`bi bi-${s.icon} bi-24`"></i>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import socialsData from "@/data/socials.json";

interface Social {
  url: string;
  icon: string;
}

const socials: Social[] = socialsData;
</script>

<style lang="scss" scoped>
// fixes positioning of custom icons...
.bi-codewars,
.bi-dev {
  margin-top: 9px;
}
</style>
