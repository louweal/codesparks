<template>
  <div class="container">
    <div class="row min-vh-100">
      <div class="col-sm-12 align-self-center">
        <h1 class="">
          <span class="h3 text-secondary fw-normal">Hi, I'm</span><br />
          Anneloes Louwe
        </h1>

        <h2 class="h4 fw-light fs-6 mb-4 text-light">
          Front-end developer | UX-designer | Hedera enthousiast
        </h2>

        <div class="col-sm-12 col-lg-5">
          <p>
            I'm a freelance front-end developer & UX designer based in Leiden
            (The Netherlands). I love building and designing sparkling websites,
            solid applications, distributed apps, and everything in between.
          </p>
        </div>

        <nuxt-link class="btn btn-secondary mb-4" :to="{ hash: '#about' }">
          See more
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
