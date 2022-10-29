export default {
  ssr: false,

  modern: "client",
  target: "static",
  router: {
    base: "/",
  },
  head: {
    title: "Anneloes Louwe | Portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Anneloes Louwe | Front-end developer - UX designer - Web3 enthousiast ",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/css/main.scss"],

  styleResources: {},
  components: true,
  buildModules: [],
  modules: ["@nuxtjs/style-resources"],
  build: {},

  generate: {
    fallback: true,

    // routes: [
    //   "/post/jambo-bark-end-developer",
    //   "/post/helix-hedera-hackathon-2022",
    // ],
  },
};
