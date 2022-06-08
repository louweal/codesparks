<template>
  <main>
    <hero />

    <section class="h-100">
      <div xxxclass="container-md">
        <div class="row min-vh-100">
          <div class="col-sm-12 col-lg-6 align-self-center">
            <h2 class="text-secondary">About me</h2>

            <hr class="border border-secondary w-50" />

            <p>
              Mauris at pharetra nisi. Mauris pharetra rutrum justo vitae
              feugiat. Quisque pulvinar feugiat laoreet. Sed semper gravida
              diam, id imperdiet nulla lobortis non. Etiam tempus porttitor
              tincidunt. Integer arcu nunc, suscipit ut nisl sed, viverra varius
              ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas dignissim ligula non condimentum eleifend.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              imperdiet accumsan nunc, ac hendrerit tortor blandit et. Donec ut
              felis odio. Donec consequat aliquet odio sit amet convallis.
            </p>

            <p>Some of the technologies and tools in my tech stack are:</p>

            <div class="row">
              <div class="col-4" v-for="(t, i) in $options.tech" :key="i">
                <i class="bi-arrow-down">i</i> {{ t }}
              </div>
            </div>
          </div>

          <div class="col-lg-5 offset-lg-1 col-xl-4 align-self-center">
            <div class="img-c">
              <img
                src="@/images/ik.png"
                alt="anneloes"
                class="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="h-100">
      <div xxxclass="container-md">
        <div class="row min-vh-100">
          <div class="col-12 align-self-center">
            <h2 class="text-secondary">Projects</h2>

            <p>Some of the technologies and tools in my tech stack are:</p>

            <div class="row">
              <div class="col-4" v-for="(p, i) in $options.projects" :key="i">
                <div class="card bg-c mb-3 rounded-3">
                  <div class="card-body">
                    <h5 class="card-title">{{ p.title }}</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Main",

  transition: "home",

  tech: [
    "html",
    "css",
    "javascript",
    "solidity",
    "bootstrap",
    "hedera sdk",
    "vue",
    "nuxt",
    "react",
    "npm",
    "git",
    "python",
    "php",
    "wordpress",
    "figma",
    "blender",
    "illustrator",
  ],

  projects: [
    { title: "Hedera Helix" },
    { title: "The Hederian Mint" },
    { title: "Master Mind" },
  ],
};
</script>

<style lang="scss" scoped>
.img-c {
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0.3rem;
    transform: rotate(6deg);
    background: #acb3df;
    z-index: -1;
  }

  &:after {
    content: "";
    width: 98%;
    height: 98%;
    position: absolute;
    left: 2%;
    top: 2%;
    border-radius: 0.3rem;
    transform: rotate(2deg);
    border: 6px solid #0be0d4;
  }
}

.bg-c {
  background-color: rgba(6, 6, 79, 0.5);
}
</style>
