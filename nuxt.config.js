export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "static",
  router: {
    base: "/",
    // base: "/soulful-workshop-front/"
  },
  head: {
    title: "soulful-workshop",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/scss/colors.scss",
    "~assets/scss/fonts.scss",
    "~assets/scss/media.scss",
    "~assets/scss/mixins.scss",
    "~assets/scss/base.scss",
    'vue-slick-carousel/dist/vue-slick-carousel.css'
  ],

  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/vue-slick-carousel.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/style-resources",
    "nuxt-i18n",
    '@nuxtjs/svg-sprite',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Storybook options
  storybook: {
    // Options
    storybook: {
      addons: [
        "@storybook/addon-actions", 
        "@storybook/addon-storysource",
        "storypug"
      ],
    },
  },
  i18n: {
    vueI18nLoader: true,
    strategy: "prefix_except_default",
    defaultLocale: "ru",
    locales: [
      "ru",
      "en", // Make sure that default locale is the last one!
    ],
  },
  svgSprite: {
    // manipulate module options
  }
};
