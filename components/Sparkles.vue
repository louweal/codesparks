<template>
  <div class="sparkles">
    <sparkle v-for="i in 200" :key="i" />
    <sparkle v-for="j in 200" :min="66" :key="'j' + j" />
    <sparkle v-for="k in 200" :min="33" :key="'k' + k" />
  </div>
</template>

<style lang="scss" scoped>
.sparkles {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #191970; //#080830;
  background: linear-gradient(
    180deg,
    rgba(#191970, 1) 0%,
    rgba(#080830, 1) 100%
  );
}
</style>
