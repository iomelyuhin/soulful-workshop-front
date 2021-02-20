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
    <p>{{ $t('hello world!') }}</p>
    <faIcon v-bind="{name: 'accessible-icon', type: 'fab', className: 'about-icon'}" />
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
    <add-video v-bind="{src: videoSrc, className: videoClass}" />
  </div>
</template>

<script>
import AddVideo from '../components/AddVideo/AddVideo.vue';

export default {
  components: { AddVideo },
  data() {
    return {
      desc: "string of desc test",
      videoSrc: "https://www.youtube.com/embed/1jPhoG108ww",
      videoClass: "video-class"
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