<template lang="pug">
  .delivery
    ul.delivery__list
      li.delivery__item
</template>

<script>
export default {
  data() {
    return {
      deliveryList: [
        {
          icon_name: "",
          text: ""
        }
      ]
    }
  }
}
</script>