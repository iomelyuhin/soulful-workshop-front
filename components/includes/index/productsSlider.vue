<template lang="pug">
.products-slider
  h2.products-slider__title Чаще всего заказывают:
  //- tiny-slider(
  //-   :mouse-drag="true" :loop="false" items="2" gutter="20"
  //- )
  .products-slider__slider
    VueSlickCarousel(
      v-bind="slickOptions"
    )
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
    productItem: () => import("../../ProductItem/ProductItem")
  },
  data() {
    return {
      slickOptions: {
        // http://kenwheeler.github.io/slick/
        // "dots": true,
        // "dotsClass": "products-slider--dots",
        // "edgeFriction": 0.35,
        "arrows": false,
        "infinite": true,
        "speed": 300,
        "slidesToShow": 4,
        "slidesToScroll": 4
      }
    }
  }
}
</script>