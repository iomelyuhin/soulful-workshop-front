import ProductItem from "./ProductItem";

export default {
  title: "Продукт",
  component: ProductItem,
  argTypes: {
    productObject: {
      
    },
    // mode: {
    //   control: {
    //     type: "select",
    //     options: ["light", "dark"]
    //   }
    // }
  }
};

export const Prod = (arg, { argTypes }) => ({
  components: { ProductItem },
  props: Object.keys(argTypes),
  template: '<ProductItem v-bind="$props" />'
});
