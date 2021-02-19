<i18n>
{
  "en": {
    "hello world!": "hello world!"
  },
  "ja": {
    "hello world!": "こんにちは、世界!"
  }
}
</i18n>
<template lang="pug">
.container
  div
    logo
    h1.title {{ $t('hello world!') }}
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
      nuxt-link(:to="switchLocalePath('ja')") Japan
      nuxt-link(:to="switchLocalePath('en')") En
</template>

<script>
export default {
  data() {
    return {
      dataString: "string",
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .some-text {
    color: $green;

    @include tablets {
      color: $black;
    }
  }
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
