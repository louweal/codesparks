<template>
  <div class="sparkles">
    <sparkle v-for="i in 50" :key="i" />
    <sparkle v-for="j in 50" :min="66" :key="'j' + j" />
    <sparkle v-for="k in 50" :min="33" :key="'k' + k" />

    <sparkle v-for="i in 150" :key="'l' + i" class="d-none d-lg-block" />
    <sparkle
      v-for="j in 150"
      :min="66"
      :key="'m' + j"
      class="d-none d-lg-block"
    />
    <sparkle
      v-for="k in 150"
      :min="33"
      :key="'n' + k"
      class="d-none d-lg-block"
    />
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
