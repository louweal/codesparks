<template>
  <div class="row min-vh-100" id="home">
    <div class="col-12 align-self-center">
      <h1 class="h3 text-secondary fw-normal lh-1">Hi, I'm</h1>
      <h1>Anneloes Louwe</h1>

      <h2 class="h4 fw-light fs-6 mb-4 text-light">
        Front-end developer | UX-designer | Hedera enthousiast
      </h2>

      <div class="col-12 col-sm-9 col-md-5">
        <p>
          I'm a front-end developer & UX designer based in Leiden. I love
          building and designing sparkling websites, modern web apps,
          decentralized apps, and everything in between.
        </p>
      </div>

      <nuxt-link
        class="btn btn-secondary mb-4"
        :to="{ path: '/', hash: '#about' }"
      >
        More about me
      </nuxt-link>
    </div>
  </div>
</template>
