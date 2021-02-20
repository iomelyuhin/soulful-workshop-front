<i18n>
{
  "en": {
    "hello world!": "hello world!",
    "Nuxt.js comes with a few important components included out of the box, which will be helpful when building your application.": "Nuxt.js comes with a few important components included out of the box, which will be helpful when building your application."
  },
  "ja": {
    "hello world!": "こんにちは、世界!",
    "Nuxt.js comes with a few important components included out of the box, which will be helpful when building your application.": "Nuxt.jsには、すぐに使用できるいくつかの重要なコンポーネントが付属しています。これは、アプリケーションを構築するときに役立ちます。"
  }
}
</i18n>

<template>
  <div>
    <h1>About page</h1>
    <div class="desc">
      {{ desc }}
    </div>
    <nuxt-link 
      :to="localePath('/')" 
      no-prefetch
    >
      To index
    </nuxt-link>
    <p>{{ $t('hello') }}</p>
    <font-awesome-icon 
      class="example" 
      :icon="['fab', 'vk']"
    />
    <p>{{ $t('Nuxt.js comes with a few important components included out of the box, which will be helpful when building your application.') }}</p>
    <nuxt-link 
      :to="switchLocalePath('ja')"
    >
      Japan
    </nuxt-link>
    <nuxt-link 
      :to="switchLocalePath('en')"
    >
      En
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: "string of desc test",
    };
  },
}
</script>

<style lang="scss" scoped>
.example {
  width: 100px;
  height: 100px;
  color: cadetblue;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: grey;
  }
}
</style>