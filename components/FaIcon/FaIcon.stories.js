import FaIcon from "./FaIcon";

export default {
  title: "Иконка",
  component: FaIcon,
  argTypes: {
    type: {
      control: "text",
      defaultValue: "fas",
    },
    name: {
      control: "text",
      defaultValue: "angle-down",
    },
    className: {
      control: "text",
      default: "icon__picture"
    }
  },
};

export const faIcon = (arg, { argTypes }) => ({
  components: { FaIcon },
  props: Object.keys(argTypes),
  template: '<FaIcon v-bind="$props" />'
});
