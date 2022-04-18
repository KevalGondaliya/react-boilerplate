import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Ghost = Template.bind({});

Primary.args = {
  type: 'primary',
  label: 'LOGIN',
};

Ghost.args = {
  type: 'ghost',
  label: 'Log Out',
};
