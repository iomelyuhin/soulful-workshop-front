<template lang="pug">
  header.header
    .header__container.container
      nuxt-link(:to="localePath('/')" no-prefetch).logo.logo--dark
      .header__middle
        nav.header__navigation.header__navigation--navigation
          navigation(v-bind='{"navigationList": navList, "mode": "light"}')
        .header__languages-switcher
          nuxt-link.header__languages-switcher-link(
            :to="switchLocalePath('ru')"
          ) RU
          span /
          nuxt-link.header__languages-switcher-link(
            :to="switchLocalePath('en')"
          ) EN
      cart(:qty="0")
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          title: "Главная",
          link: "/"
        },
        {
          title: "О мастерской",
          link: "/#about"
        },
        {
          title: "Корзина",
          link: "/cart"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  padding: 22px 0;
}

.logo {
  display: flex;
  width: 200px;
  height: 68px;

  &--dark {
    background-image: url('~assets/img/logo.png');
    background-repeat: no-repeat;
    background-size: contain;
  }
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__middle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 46px;
}

.header__languages-switcher-link {
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
}
</style>