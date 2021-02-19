<template>
<div>
  <h1>About page</h1>
  <div class="desc">{{ desc }}</div>
  <nuxt-link to="/" no-prefetch>To index</nuxt-link>
</div>
</template>

<script>
export default {
  data() {
    return {
      desc: "string of desc test",
    };
  },
}
</script>