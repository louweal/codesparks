<template>
  <main>
    <section>
      <div class="row">
        <div class="col-12 col-md-5 align-self-center mb-2 mb-sm-0">
          <nuxt-link :to="{ path: '/', hash: '#tools' }">
            <i class="bi bi-arrow-left-short text-secondary align-middle"></i>
            Back
          </nuxt-link>
          <h2 class="text-secondary py-2">HBAR converter</h2>

          <p>
            This is not just another exchange rate calculator. It lets you find
            exchange rates on every given date in the past! Very useful for tax
            administration purposes!
          </p>
        </div>

        <div class="col-12 col-md-7 offset-lg-1 col-lg-6 col-xl-5">
          <form-converter />
        </div>
      </div>
    </section>
  </main>
</template>
