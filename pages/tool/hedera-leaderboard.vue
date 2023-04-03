<template>
  <main>
    <div id="pushdown" class="w-100" style="height: 82px"></div>

    <section class="py-4">
      <div class="row">
        <div class="col-12 col-md-5 xxxalign-self-center mb-2 mb-sm-0">
          <nuxt-link :to="{ path: '/', hash: '#tools' }">
            <i class="bi bi-arrow-left-short text-secondary align-middle"></i>
            Back
          </nuxt-link>
          <h2 class="text-secondary py-2">Hedera Leaderboard</h2>

          <p>
            Enter your Account ID and find out what your rank is in the Hedera
            Leaderboard. The data is fetched realtime from the Hedera network so
            it may take some minutes to load. You need to have at least
            <span class="fw-bold text-light">50000 HBAR</span> in your account
            to obtain a ranking.
          </p>

          <p>
            Also check out this more advanced Hedera Leaderboard which was build
            by Phasmatis:
            <a
              href="https://hedera-leaderboard.com"
              target="_blank"
              class="text-light"
              >hedera-leaderboard.com</a
            >
          </p>
        </div>

        <div class="col-12 col-md-7 offset-lg-1 col-lg-6 col-xl-5">
          <leaderboard />
        </div>
      </div>
    </section>
  </main>
</template>
