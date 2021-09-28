export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Adams Aimé-Désiré",
    htmlAttrs: {
      lang: "fr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Adams Aimé-Désiré, javascript front-end développeur. Travaillonns ensemble et construisons de grande chose."
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary"
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@nuxt_js"
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@dams9ix"
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://damsx.netlify.app/"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Portfolio - Adams Aimé-Désiré"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Adams Aimé-Désiré, javascript front-end développeur. Travaillonns ensemble et construisons de grande chose."
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://res.cloudinary.com/dams9ix/image/upload/v1632838794/logo_kxkl24.png"
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: "Adams Aimé-Désiré logo"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Portfolio - Adams Aimé-Désiré"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://damsx.netlify.app/"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Portfolio - Adams Aimé-Désiré"
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Adams Aimé-Désiré, javascript front-end développeur. Travaillonns ensemble et construisons de grande chose."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://res.cloudinary.com/dams9ix/image/upload/v1632838794/logo_kxkl24.png"
      },
      {
        hid: "og:image:alt",
        name: "og:image:alt",
        content: "Adams Aimé-Désiré logo"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/fonts/style.css",
    // Global css
    "~assets/css/global.css",
    // Burger button
    "@/assets/css/hamburgers.css",
    // Locomotive scroll
    "@/assets/css/locomotive-scroll.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Error 404 page
  generate: {
    fallback: true
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // Tailwind module
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    // axios
    "@nuxtjs/axios"
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
