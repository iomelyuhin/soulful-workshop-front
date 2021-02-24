<template lang="pug">
  .package
    .package__image
      //- img.package__image-pic(src="~/assets/img/package.jpg")
    .package__text
      .package__text-content Стильная упаковка, которую не стыдно дарить, а распаковывать такой подарок - отдельное эстетическое удовольствие

</template>

<style lang="scss" scoped>
.package {
  display: flex;
  position: relative;
  // min-height: 500px;
}

.package__image {
  width: 50%;
  background-image: url("~assets/img/package.png");
  background-size: contain;
  // background-repeat: no-repeat;
  background-position-x: right;
  flex-shrink: 0;
}

.package__text {
  padding: 70px 40px 90px 40px;
  max-width: 600px;
  background-color: #393938;
}

.package__text-content {
  font-size: 36px;
  color: $light;
  font-weight: $lite;
  border: 2px solid $light;
  padding: 20px;
}
</style>