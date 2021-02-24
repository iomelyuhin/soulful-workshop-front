import AddVideo from "./AddVideo";

export default {
  title: "Плеер",
  component: AddVideo,
  argTypes: {
    src: {
      control: "text",
      defaultValue: "https://www.youtube.com/embed/E_Jbf73lH8g",
    }
  },
};

export const videoPlayer = (arg, { argTypes }) => ({
  components: { AddVideo },
  props: Object.keys(argTypes),
  template: '<AddVideo v-bind="$props" />'
});
