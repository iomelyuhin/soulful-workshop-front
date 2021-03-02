<template lang="pug">
.products-slider
  h2.products-slider__title Чаще всего заказывают:
  //- tiny-slider(
  //-   :mouse-drag="true" :loop="false" items="2" gutter="20"
  //- )
  .products-slider__slider
    VueSlickCarousel(v-bind="slickOptions")
      .products-slider__slider-item
        productItem
      .products-slider__slider-item
        productItem
      .products-slider__slider-item
        productItem
      .products-slider__slider-item
        productItem
      .products-slider__slider-item
        productItem
      .products-slider__slider-item
        productItem
      .products-slider__slider-item
        productItem
</template>

<script>
export default {
  components: {
    productItem: () => import("../../ProductItem/ProductItem"),
  },
  data() {
    return {
      slickOptions: {
        // http://kenwheeler.github.io/slick/
        dots: true,
        dotsClass: "products-slider--dots",
        // "edgeFriction": 0.35,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.products-slider {
  padding: 70px 0 90px 0;
}

.products-slider__title {
  text-align: center;
}

.products-slider__slider {
  margin-top: 40px;
  margin-left: 15px;
}

.products-slider__slider-item {
  display: flex;
  justify-content: center;
  max-width: calc(100vw / 4 - 50px);
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
</style>

<style lang="scss">
ul.products-slider--dots {
  display: flex !important;
  width: 100%;
  justify-content: center;
  margin-top: 30px;

  button {
    font-size: 0;

    &:hover {
      &::before {
        background-color: rgba($dark, 0.85);
      }
    }

    &::before {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background-color: $dark;
      border-radius: 100%;
      transition: background-color 0.3s;
    }
  }

  li.slick-active {
    button {
      &::before {
        background-color: transparent;
        border: 2px solid $dark;
      }
    }
  }
  li {
    margin-right: 30px;
  }
}
</style>