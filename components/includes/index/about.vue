<template lang="pug">
section#about.about
  .about__container
    .about__image
    .about__text-container
      .about__text-content
        h2.about__text-title Добро пожаловать в «Душевную&nbsp;мастерскую», друзья!
        p Меня зовут Лиза, я – мама мастерской и дочки Евушки.
        p Душевная мастерская — это место, где рождаются умные игрушки из разряда
        | "не на один вечер". Душевная мастерская — это дом развивающих книжек
        | и кукольных замков.
        p Она была основана в 2014 году, а детское направление стало развиваться
        | спонтанно и стремительно в 2017 году - вместе с моим материнством.
        | Оказалось, что многим мамам хочется окружать своих детей полезными,
        | экологичными и "долгоиграющими" игрушками. Так, в потоке заказов,
        | благодарных слов, возвращающихся вновь и вновь заказчиков - мастерская выросла!
        | Теперь уже более 150 детей играют книжками от "Душевной мастерской"!
        p Но несмотря на годы шитья и количество заказов - она остается маленьким
        | уютным местом, куда приходят, как в гости: каждый малыш - становиться родным,
        | каждый заказ - особенным. И все, что производиться в "Душевной мастерской" -
        | производиться с такой же аккуратностью и трепетом, как для своего ребенка:
        | с любовью в каждом стежке.​
</template>

<style lang="scss" scoped>
.about {
  background: linear-gradient(180deg, #EAEAEA 0%, #EBEFF0 24.48%, #EBEFEF 52.6%, #E7EBED 76.56%, #E2E6E9 100%);
}

.about__container {
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;

}

.about__image {
  width: 50%;
  background-image: url('~assets/img/creator.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: left;

}

.about__text-container {
  padding: 70px 0 90px 0;
  width: 50%;
}

.about__text-content {
  max-width: 550px;

  p {
    margin-bottom: 20px;
  }
}

.about__text-title {
  margin-bottom: 30px;
}
</style>

