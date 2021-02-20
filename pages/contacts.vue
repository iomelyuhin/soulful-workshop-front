<template lang="pug">
  .container
    h1 Contacts
    input.input-class(
      v-model="inputValue"
      class="cls"
      placeholder="common, type anything!"
    )
    .input-value {{inputValue}}
  
</template>

<script>
export default {
  data() {
    return {
      inputValue: ""
    }
  } 
}
</script>