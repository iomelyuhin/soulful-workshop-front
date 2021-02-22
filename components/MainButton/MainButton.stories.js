import MainButton from './MainButton'
import { action } from "@storybook/addon-actions";

const methods = {
  onClickAction: action("onClickAction")
}

export default {
    title: 'Кнопка',
    component: MainButton,
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
    components: { MainButton },
    props: Object.keys(argTypes),
    template: '<MainButton @clickAction="onClickAction" v-bind="$props" />',
    methods
})