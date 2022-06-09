<template>
  <main>
    <div id="pushdown" class="w-100" style="height: 82px"></div>

    <section class="py-4">
      <div class="row">
        <div class="col-12 col-sm-8 offset-sm-2">
          <div class="badge bg-secondary text-primary mb-3">badge</div>

          <h1 class="h2">I'm a post</h1>

          <p>24 july 2022</p>
        </div>

        <div class="col-12">
          <div class="ratio ratio-21x9 mt-3 mb-5">
            <img
              :src="require(`~/images/jambo.jpg`)"
              alt="anneloes"
              class="img-fluid rounded-3"
            />
          </div>
        </div>

        <!-- </div> -->

        <div class="col-12 col-sm-8 offset-sm-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            iusto, omnis autem assumenda totam soluta distinctio quidem laborum
            cum, dolor et quisquam illo adipisci rerum, deleniti error
            explicabo. Cum, enim!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis
            quis dolorum provident, rerum sed beatae, in eveniet saepe minus
            doloremque aliquid amet ab omnis perferendis ut deleniti.
            Cupiditate, est?
          </p>

          <div class="my-5 img-c">
            <img
              :src="require(`~/images/jambo.jpg`)"
              alt="anneloes"
              class="img-fluid rounded-3"
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis
            quis dolorum provident, rerum sed beatae, in eveniet saepe minus
            doloremque aliquid amet ab omnis perferendis ut deleniti.
            Cupiditate, est?
          </p>

          socialshare
        </div>
      </div>
    </section>

    <section class="py-4">
      <h1 class="h2 mb-4">Other blogs</h1>

      <div class="row">
        <div
          class="col-12 col-md-6 mb-4"
          v-for="(a, i) in $options.articles.list
            .filter((a) => a.slug != $route.params.slug)
            .slice(0, 4)"
          :key="i"
        >
          <nuxt-link :to="`/post/${a.slug}`" class="card bg-c rounded-3 h-100">
            <div class="card-body">
              <div class="badge bg-secondary text-primary mb-1" v-if="a.badge">
                {{ a.badge }}
              </div>

              <h3 class="card-title">{{ a.title }}</h3>

              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>

            <div class="card-footer">
              <i
                class="bi bi-arrow-right-short fs-5 align-middle text-secondary"
              ></i>
              <span class="align-middle">Read more</span>
            </div>
          </nuxt-link>
        </div>

        <div
          class="text-center"
          v-if="$options.articles.list.length > numArticles"
        >
          <div class="btn btn-secondary" @click="loadMoreArticles">
            More articles
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import articles from "@/data/articles.json";

export default {
  articles,

  // data() {
  //   return {
  //     numArticles: 6,
  //   };
  // },
};
</script>

<style lang="scss" scoped>
.bg-c {
  background-color: rgba(11, 224, 212, 0.2); // rgba(6, 6, 79, 0.5);
  transition: background-color 0.4s ease-in-out;

  // &:hover {
  //   background-color: rgba(11, 224, 212, 0.25); // rgba(6, 6, 79, 0.5);
  // }
}
</style>
