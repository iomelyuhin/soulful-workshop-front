import Navigation from "./Navigation";

export default {
  title: "Меню",
  component: Navigation,
  argTypes: {
    navigationList: {
      control: {
        type: "array",
      },
      defaultValue: [
        {
          title: "Главная",
          link: "/"
        },
        {
          title: "Корзина",
          link: "/cart"
        }
      ],
    },
    mode: {
      control: {
        type: "select",
        options: ["light", "dark"]
      }
    }
  }
};

export const Nav = (arg, { argTypes }) => ({
  components: { Navigation },
  props: Object.keys(argTypes),
  template: '<Navigation v-bind="$props" />'
});
