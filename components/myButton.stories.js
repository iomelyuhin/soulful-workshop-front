import MyButton from './MyButton'
import { action } from "@storybook/addon-actions";

const methods = {
  onClickAction: action("onClickAction")
}

export default {
    title: 'Button',
    component: MyButton,
    argTypes: {
        type: {
          control: {
            type: 'select',
            options: ['primary', 'secondary'],
          },
          defaultValue: 'primary'
        },
        round: { control: 'boolean' },
        text: {
            control: 'text',
            defaultValue: 'Awesome Button'
        }
    }
}

export const Button = (arg, { argTypes }) => ({
    components: { MyButton },
    props: Object.keys(argTypes),
    template: '<MyButton @clickAction="onClickAction" v-bind="$props" />',
    methods
})