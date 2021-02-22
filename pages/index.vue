
<template lang="pug">
  div
    svg-icon(name="plane")
    h1.title soulful-workshop-change3
    .links
      a.button--green(
        href="https://nuxtjs.org/",
        target="_blank",
        rel="noopener noreferrer"
      ) Documentation
      a.button--grey(
        href="https://github.com/nuxt/nuxt.js",
        target="_blank",
        rel="noopener noreferrer"
      ) GitHub
      .some-text {{ dataString }}
      nuxt-link(:to="localePath('about')" no-prefetch) To about
      nuxt-link(:to="switchLocalePath('en')") English
      nuxt-link(:to="switchLocalePath('ru')") Ru
    
</template>

<script>
export default {
  loading: '~/components/loading.vue',
  data() {
    return {
      dataString: "string",
    };
  },
  methods: {
    sayHello() {
      alert("hello!")
    }
  }
};
</script>



<i18n>
{
  "en": {
    "Привет мир!": "hello world!"
  },
  "ru": {
    "Привет мир!": "Привет мир!"
  }
}
</i18n>