
<template lang="pug">
  main
    hero
    about
    overview
    package
    delivery
</template>

<script>
export default {
  loading: '~/components/loading.vue',
  components: {
    hero: () => import('../components/includes/index/hero'),
    about: () => import('../components/includes/index/about'),
    overview: () => import('../components/includes/index/overview'),
    package: () => import('../components/includes/index/package'),
    delivery: () => import('../components/includes/index/delivery')
  },
  data() {
    return {
      dataString: "string",
    };
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