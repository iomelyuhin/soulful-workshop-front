<template lang="pug">
-
  var deliveryList = [
    {
      icon_name: "shield",
      text:
        "Перед отправкой, упаковываю заказы дополнительно, чтобы обеспечить <span>“антивандальную защиту”</span>.",
    },
    {
      icon_name: "plane",
      text:
        "Отправляю заказы <span>Почтой России, СДЭК</span> или другими транспортными кампаниями на Ваше усмотрение.",
    },
    {
      icon_name: "clock",
      text:
        "<span>Сроки доставки</span> зависят от служб доставки:<br />- по России - от 3 дней;<br />- в другие страны - от 7 дней.",
    }
  ]

.delivery
  .delivery_bg
    img(src="~/assets/img/bag.jpg")
  ul.delivery__list
    each item in deliveryList
      li.delivery__item
        svg-icon.delivery__item-icon(name=item.icon_name)
        .delivery__item-text!=item.text
</template>

<script>
export default {
  data() {
    return {
      // deliveryList: [
      //   {
      //     icon_name: "shield",
      //     text:
      //       "Перед отправкой, упаковываю заказы дополнительно, чтобы обеспечить <span>“антивандальную защиту”</span>.",
      //   },
      //   {
      //     icon_name: "plane",
      //     text:
      //       "Отправляю заказы <span>Почтой России, СДЭК</span> или другими транспортными кампаниями на Ваше усмотрение.",
      //   },
      //   {
      //     icon_name: "clock",
      //     text:
      //       "<span>Сроки</span> доставки зависят от служб доставки:<br />- по России - от 3 дней;<br />- в другие страны - от 7 дней.",
      //   },
      // ],
    };
  },
};
</script>

<style lang="scss" scoped>
.delivery {
  background: linear-gradient(180deg, #e0e3e6 0%, #e0e1e5 48.68%, #dadee1 100%);
  display: flex;
  align-items: center;
}

.delivery_bg {
  width: 50%;
}

.delivery__list {
  width: 50%;
  background: linear-gradient(180deg, #e0e3e6 0%, #e0e1e5 48.68%, #dadee1 100%);
}

.delivery__item-icon {
  width: 55px;
  height: 55px;
}

.delivery__item {
  display: flex;
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
}

.delivery__item-text {
  margin-left: 30px;
  max-width: 385px;
}
span {
  font-weight: $semi-bold;
}
</style>