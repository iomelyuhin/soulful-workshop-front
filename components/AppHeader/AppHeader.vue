<template lang="pug">
  header.header
    .header__container.container
      nuxt-link(:to="localePath('/')" no-prefetch).logo.logo--dark
      nav.header__navigation.header__navigation--navigation
        navigation(:navigationList="navList", :mode="light")
      cart(:qty="2")
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
</style>