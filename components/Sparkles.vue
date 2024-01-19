<template>
  <div class="sparkles">
    <component :is="sparkleType" v-for="i in 50" :key="i" />
    <component :is="sparkleType" v-for="j in 50" :min="66" :key="'j' + j" />
    <component :is="sparkleType" v-for="k in 50" :min="33" :key="'k' + k" />

    <component
      :is="sparkleType"
      v-for="i in 100"
      :key="'l' + i"
      class="d-none d-lg-block"
    />
    <component
      :is="sparkleType"
      v-for="j in 100"
      :min="66"
      :key="'m' + j"
      class="d-none d-lg-block"
    />
    <component
      :is="sparkleType"
      v-for="k in 100"
      :min="33"
      :key="'n' + k"
      class="d-none d-lg-block"
    />
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$route.path);
    // if(this.$route.params.)
  },

  computed: {
    sparkleType() {
      if (this.$route.path.startsWith("/tool")) {
        return "sparkle-hbars";
      }
      return "sparkle-dots";
    },
  },
};
</script>

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
