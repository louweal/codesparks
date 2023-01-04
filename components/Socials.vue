<template>
  <div class="row min-vh-100 max-vh-100 sticky-top">
    <div class="col align-self-center">
      <div class="vstack gap-3 align-items-center">
        <template v-for="s in socials" xxxkey="i">
          <a :href="s.url" target="_blank" class="fs-4">
            <i :class="`bi bi-${s.icon} bi-24`"></i>
          </a>
        </template>
      </div>
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
