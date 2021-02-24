<template lang="pug">
  section.overview
    .overview__title
      h2 С любовью в каждом стежке
      svg-icon.overview__icon(name="heart")
    .overview__video
      addVideo(
        src="https://www.youtube.com/embed/KY8ayep9nJU"
      )
</template>

<style lang="scss" scoped>
.overview {
  padding: 70px 0 90px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.overview__title {
  display: flex;
  align-items: center;
}

.overview__icon {
  margin-left: 15px;
  width: 34px;
  height: 34px;
}

.overview__video {
  margin-top: 30px;
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 900px;
  max-height: 507px;
}
</style>