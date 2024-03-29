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
        content: "Front-end developer, UX designer & Hedera enthusiast ",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  css: ["@/assets/css/main.scss"],

  messages: {
    error_404: "Page not found",
  },

  components: true,
  buildModules: [],
  build: {},

  generate: {
    fallback: true,
  },
};
