<template lang="pug">
  .product__item-wrap
    .product__item-image
      img.product__item-img(src="~/assets/img/item-1.jpg" alt="")
    .product__item-info
      .product__item-info-cetegory Большая книжка (1+)
      h3.product__item-info-title Кукольный домик "Лазурный"
      .product__item-info-cta
        .product__item-info-cta-price 
          .product__item-info-cta-price-value 1000
          .product__item-info-cta-price-currency {{ $t('Валюта') }}
        .product__item-info-cta-button
          mainButton(
            v-if="!isInCart"
            @pushTheButton="addToCart"
            v-bind='{type: "primary-small", text: "В корзину"}')
          mainButton(
            v-if="isInCart"
            @pushTheButton="goToCart"
            v-bind='{type: "secondary-small-disabled", text: "В корзине"}')
</template>

<script>
export default {
  component: {
    mainButton: () => import("../MainButton/MainButton")
  },
  data() {
    return {
      isInCart: false
    }
  },
  methods: {
    addToCart() {
      this.isInCart=true
      // alert("add to cart")
    },
    goToCart() {
      alert("goToCart")
    }
  }
}
</script>

<i18n>
{
  "en": {
    "Валюта": "$"
  },
  "ru": {
    "Валюта": "₽"
  }
}
</i18n>

<style lang="scss" scoped>
.product__item-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product__item-info-cetegory {
  font-weight: $light;
  font-size: 12px;
  text-transform: uppercase;
}

.product__item-info-cetegory {
  margin-top: 20px;
}

.product__item-info-title {
  margin-top: 20px;
}

.product__item-info-cta {
  display: flex;
  justify-content: space-between;
}


</style>