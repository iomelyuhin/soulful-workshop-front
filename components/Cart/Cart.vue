<template lang="pug">
  nuxt-link.cart(:to="localePath('cart')")
    .cart__empty(v-if="itemsQty == 0")
      .cart__icon
        svg-icon.cart__icon-pic(name="basket")
      .cart__qty
        .cart__qty-text {{ itemsQty }}
    .cart__full(v-if="itemsQty > 0")
      .cart__icon
        svg-icon.cart__icon-pic(name="basket-full")
      .cart__qty
        .cart__qty-text {{ itemsQty }}
</template>

<script>
export default {
  props: {
    qty: {
      type: Number,
      default: "0",
    },
  },
  emits: {
    pushTheButton: null,
  },
  computed: {
    itemsQty() {
      return Number(this.qty)
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  position: relative;
  width: 41px;
  height: 40px;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
}

.cart__icon-pic {
  width: 41px;
  height: 40px;
}

.cart__qty {
  position: absolute;
  width: 19px;
  height: 20px;
  top: 11px;
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart__qty-text {
  position: relative;
  font-family: 'OpenSans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: $dark;
}


</style>