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
      } else if (this.type === "primary-small") {
        classes.push("btn--primary-small");
      } else if (this.type === "secondary") {
        classes.push("btn--secondary");
      } else if (this.type === "secondary-small") {
        classes.push("btn--secondary-small");
      } else if (this.type === "secondary-small-disabled") {
        classes.push("btn--secondary-small-disabled");
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

  &--primary-small {
    background-color: $dark;
    color: $light;
    padding: 10px 25px;
    font-size: 14px;

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

  &--secondary-small {
    background-color: transparent;
    color: $dark;
    border: 3px solid $dark;
    padding: 10px 25px;
    font-size: 14px;
  }

  &--secondary-small-disabled {
    background-color: transparent;
    color: $dark;
    border: 3px solid transparent;
    margin: 8px 25px;
    padding: 0;
    font-size: 14px;
    cursor: initial;
    text-align: center;
    border-bottom: 1px solid $dark;
    cursor: pointer;
  }
}
</style>