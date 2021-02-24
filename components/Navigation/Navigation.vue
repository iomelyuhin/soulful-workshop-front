<template lang="pug">
  ul.navigation
    li.navigation__item(
      v-for="item in navigationList" :key="item"
    )
      nuxt-link(
        :to="localePath(`${item.link}`)"
        :class="{'dark' : mode == 'dark'}"
      ).navigation__item-title {{ item.title }}
</template>

<script>
export default {
  props: {
    navigationList: {
      type: Array
    },
    mode: {
      type: String,
      default: "light"
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
}

.navigation__item {
  margin-right: 28px;

  &:last-child {
    margin-right: 0;
  }
}

.navigation__item-title {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: $regular;
  transition: 0.3s;
  letter-spacing: 1px;

  &:hover {
    color: rgba($dark, 0.5)
  }

  &.dark {
    color: $light;

    &:hover {
      color: $light-grey;
    }
  }
}
</style>