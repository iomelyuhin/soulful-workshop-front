<template lang="pug">
button.btn(
  :class="btnClass", 
  @click.prevent="$emit('pushTheButton', $event)"
)
  slot {{ text }}
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary",
    },
    text: {
      type: String,
      default: "Button",
    },
  },
  emits: {
    pushTheButton: null,
  },
  computed: {
    btnClass() {
      const classes = [];
      if (this.type === "primary") {
        classes.push("btn--primary");
      } else if (this.type === "secondary") {
        classes.push("btn--secondary");
      }
      return classes.join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  font: $btn-text;
  padding: 15px 30px;
  text-transform: uppercase;

  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &--primary {
    background-color: $dark;
    color: $light;
    &:hover {
      background-color: rgba($dark, 0.85);
    }
  }

  &--secondary {
    background-color: transparent;
    color: $dark;
    border: 3px solid $dark;
    &:hover {
      background-color: $dark;
      color: $light
    }
  }
}
</style>