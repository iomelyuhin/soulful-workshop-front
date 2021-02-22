import MainButton from "./MainButton";
import { action } from "@storybook/addon-actions";

const methods = {
  onClickAction: action("onClickAction"),
};

export default {
  title: "Кнопка",
  component: MainButton,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
      defaultValue: "primary",
    },
    text: {
      control: "text",
      defaultValue: "Прейти в каталог",
    },
  },
};

export const Button = (arg, { argTypes }) => ({
  components: { MainButton },
  props: Object.keys(argTypes),
  template: '<MainButton @pushTheButton="onClickAction" v-bind="$props" />',
  methods,
});
