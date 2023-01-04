// import { fileURLToPath, URL } from "node:url";

// import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineNuxtConfig({
  ssr: false,

  modern: "client",
  target: "static",
  router: {
    base: "/",
  },
  app: {
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
            "Anneloes Louwe | Front-end developer - UX designer - Hedera enthousiast ",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },

  css: ["@/assets/css/main.scss"],
  modules: ["@pinia/nuxt"],

  // build: {},

  // generate: {
  //   fallback: true,
  // },
});
