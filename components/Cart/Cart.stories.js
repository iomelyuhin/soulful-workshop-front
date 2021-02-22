import Cart from "./Cart";

export default {
  title: "Корзина",
  component: Cart,
  argTypes: {
    qty: {
      control: "text",
      defaultValue: "0",
    },
  },
};

export const Button = (arg, { argTypes }) => ({
  components: { Cart },
  props: Object.keys(argTypes),
  template: '<Cart v-bind="$props" />'
});
