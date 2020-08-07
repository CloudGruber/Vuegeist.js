import pkg from "./package.json";

export default {
  mode: "spa",
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  plugins: ["@/plugins/theme"],
  loading: { color: "#3b8070" },
  css: [
    "bulma/css/bulma.css",
    "@zeit-ui/themes/index.css",
    "@zeit-ui/vue/dist/zeit-ui.css"
  ],
  webfontloader: {
    google: {
      families: ["Manrope:200,400"]
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      }
    }
  },
  modules: ["@nuxtjs/axios", "nuxt-webfontloader", "./codesandbox"],
  axios: {},
  build: {
    extend(config, ctx) {}
  }
};
