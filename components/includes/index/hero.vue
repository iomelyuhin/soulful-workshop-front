<template lang="pug">
section.hero
  .hero__main
    h1.hero__title РАЗВИВАЮЩИЕ ИГРУШКИ РУЧНОЙ РАБОТЫ ИЗ ФЕТРА
    .hero__desc est.2014
    .hero__button
      mainButton(
        @pushTheButton="$router.push(localeRoute({name: 'catalog'}))",
        v-bind="{type: 'primary', text: 'Перейти в каталог'}"
      )
  .hero__scroll
    nuxt-link.hero__scroll-link(:to="localePath({ path: '/',hash:'#about'})") О мастерской
</template>

<script>
export default {
  methods: {
    goToCatalog() {
      this.$router.push(
        localeRoute({
          name: "catalog",
        })
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('~assets/img/hero-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: calc(100vh - 112px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
}

.hero__title {
  font-size: 45px;
  font-weight: $semi-bold;
  text-align: center;
}

.hero__desc {
  margin-top: 18px;
  font-size: 25px;
  font-weight: $regular;
}

.hero__button {
  margin-top: 30px;
}

.hero__scroll {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.hero__scroll-link {
  text-transform: uppercase;
  background-color: rgba(232,236,237,1);
  border: 1px solid rgba(33, 23, 16, 0.25);
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  padding: 10px 15px 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    padding-bottom: 10px;
  }
}
</style>