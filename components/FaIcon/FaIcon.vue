<template>
  <font-awesome-icon 
    :class="iconClass" 
    :icon="[type, name]"
  />
  <!-- <button 
    class="font-bold py-2 px-4 text-white"
    :class="btnClass" 
    @click.prevent="$emit('clickAction', text)"
  >
    <slot>{{ text }}</slot>
  </button> -->
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "fas"
    },
    name: {
      type: String,
      default: 'angle-down'
    },
    iconClass: {
      type: String,
      default: "icon__picture"
    }
  },
}
</script>