<template>
  <main>
    <section class="h-100 py-4" id="contact">
      <div class="row justify-content-center" style="min-height: 90vh">
        <div class="col-12 col-md-7 col-lg-6 col-xl-5 align-self-center">
          <div class="rounded-3 bg-c p-3 p-sm-4 p-xl-5">
            <div class="ms-1 mb-3">
              <i class="bi bi-envelope-open fs-2"></i>
            </div>

            <p>
              Thank you for your comment! To avoid spam, it will be published
              after review.
            </p>

            <p @click="$router.back()" style="cursor: pointer">
              <i
                class="bi bi-arrow-left-short fs-5 align-middle text-secondary"
              >
              </i>

              <span class="align-middle"> Go back to previous page </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
