<template lang="pug">
  .package
    //- img.package__image-pic(src="~/assets/img/package.jpg")
    .package__text
      .package__text-content Стильная упаковка, в которой <span>удобно хранить</span> и которую <span>не стыдно дарить</span>
    .package__image

</template>

<style lang="scss" scoped>
.package {
  display: flex;
  position: relative;
  background: linear-gradient(180deg, #D6DADD 0%, rgba(221, 225, 227, 0.822917) 45.7%, #E2E5EA 73.33%, #DDE0E5 100%);

  // min-height: 500px;
}

.package__image {
  width: 50%;
  background-image: url("~assets/img/package.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  flex-shrink: 0;
}

.package__text {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding: 170px 40px 170px 40px;
  // background: linear-gradient(180deg, #D6DADD 0%, rgba(221, 225, 227, 0.822917) 45.7%, #E2E5EA 73.33%, #DDE0E5 100%);
}

.package__text-content {
  max-width: 600px;
  font-size: 36px;
  color: $dark;
  font-weight: $lite;
  border: 5px solid $light;
  padding: 20px;

  span {
    font-weight: $semi-bold;
  }
}
</style>