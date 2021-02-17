<template>
  <button 
    class="font-bold py-2 px-4 text-white"
    :class="btnClass" 
    @click.prevent="$emit('clickAction', text)"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    round: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    text: {
      type: String,
      default: 'Button'
    }
  },
  computed: {
    btnClass () {
      const classes = []
      if (this.round) {
        classes.push('rounded-full')
      }
      if (this.type === 'primary') {
        classes.push('bg-blue-500 hover:bg-blue-700')
      } else if (this.type === 'secondary') {
        classes.push('bg-gray-500 hover:bg-gray-700')
      }
      return classes.join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>

  button {
    padding: 30px 40px;
    text-transform: uppercase;
    font-size: 20px;
    background-color: lightcoral;
    border: none;
    font-weight: bold;
    color: #fff;
  }

  .rounded-full {
    border-radius: 100px;
  }

  .bg-blue-500 {
    background-color: rgba(blue, 0.5);

    &:hover {
      background-color: rgba(blue, 0.7);
    }
  }

  .bg-gray-500 {
    background-color: rgba(rgb(56, 56, 56), 0.5);

    &:hover {
      background-color: rgba(56, 56, 56, 0.7);
    }

  }
</style>
