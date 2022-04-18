import { Story, Meta } from '@storybook/react';

import { CardBox, CardBoxProps } from './CardBox';

export default {
  title: 'Core/CardBox',
  component: CardBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CardBoxProps> = (args) => (
  <CardBox {...args}>
    <h1>Content</h1>
  </CardBox>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Login',
  subtitle: <h1>Enter username/info</h1>,
};
