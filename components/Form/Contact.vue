<template>
  <div class="rounded-3 bg-c p-3 p-sm-4 p-xl-5">
    <div class="ms-1 mb-3">
      <i class="bi bi-envelope-open fs-2"></i>
    </div>

    <form
      name="contact"
      method="POST"
      action="/success"
      data-netlify="true"
      netlify
      netlify-honeypot="title"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div class="d-none">
        <label>
          Don’t fill this out if you’re human:
          <input name="title" />
        </label>
      </div>

      <!-- Name input -->
      <div class="form-floating mb-4">
        <input
          type="text"
          id="name"
          class="form-control bg-c"
          name="name"
          required
        />
        <label class="form-label" for="name">Name</label>
      </div>

      <!-- Email input -->
      <div class="form-floating mb-4">
        <input
          type="email"
          id="email"
          class="form-control bg-c"
          name="email"
          required
        />
        <label class="form-label" for="email">E-mail</label>
      </div>

      <!-- Message input -->
      <div class="form-floating mb-4">
        <textarea
          class="form-control h-100 bg-c"
          id="message"
          name="message"
          rows="5"
          required
        ></textarea>
        <label class="form-label" for="message">Message</label>
      </div>

      <!-- Checkbox -->
      <div class="form-check mb-4">
        <input
          class="form-check-input me-2 bg-c"
          type="checkbox"
          value="checked"
          name="privacy"
          id="privacy"
          required
        />
        <label class="form-check-label" for="privacy">
          I agree to the
          <nuxt-link to="/privacy-statement" class="text-light"
            >privacy statement</nuxt-link
          >
        </label>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-secondary btn-block mb-4">
        Send
      </button>
    </form>
  </div>
</template>
