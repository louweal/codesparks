<template>
  <div
    class="sparkle"
    :style="{
      background: randomGradient,
      left: randomXPos,
      top: randomYPos,
      width: randomSize,
      height: randomSize,
      animationDelay: randomDelay,
    }"
  />
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 110 },
});

const randomXPos = computed(() => Math.ceil(Math.random() * 100) + "%");
const randomYPos = computed(
  () => props.min + Math.ceil(Math.random() * (props.max - props.min)) + "%"
);
const randomDelay = computed(() => Math.ceil(Math.random() * 15) + "s");
const randomSize = computed(() => 2 + Math.ceil(Math.random() * 6) + "px");
const randomGradient = computed(() => {
  return `radial-gradient( circle, ${randomRGB(0.25)} 0%, ${randomRGB(
    0.5
  )} 100%)`;
});

function randomColor(min: number, max: number): number {
  return min + Math.ceil(Math.random() * (max - min));
}

function randomRGB(opacity: number): string {
  return `rgba(
        ${randomColor(0, 200)},
      ${randomColor(204, 244)},
      ${randomColor(150, 230)}, ${opacity}
      )`;
}
</script>

<style lang="scss" scoped>
.sparkle {
  position: absolute;
  width: 6px;
  height: 6px;
  border: 1px solid (#fff, 0.2);
  border-radius: 50%;
  opacity: 0;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: scale(10%);
    opacity: 0.3;
  }
  66% {
    transform: scale(100%) translate(0px, -50px);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
}
</style>
