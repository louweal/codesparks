<template>
  <main>
    <section>
      <div class="row">
        <div class="col-12 col-md-5 align-self-center mb-2 mb-sm-0">
          <!-- <div class="badge bg-secondary text-primary mb-2">tool</div> -->
          <nuxt-link :to="{ path: '/', hash: '#tools' }">
            <i class="bi bi-arrow-left-short text-secondary align-middle"></i>
            Back
          </nuxt-link>
          <h2 class="text-secondary py-2">HBAR Time Machine</h2>

          <p>
            Go back in time and find out what your HBAR balance was! This time
            machine makes declaring your assets to tax authorities a lot easier.
            It can also convert your HBAR balance to any other currency.
          </p>
        </div>

        <div class="col-12 col-md-7 offset-lg-1 col-lg-6 col-xl-5">
          <form-time-machine />
        </div>
      </div>
    </section>
  </main>
</template>
