import { Story, Meta } from '@storybook/react';

import { LoginComponent, LoginComponentProps } from './LoginComponent';

export default {
  title: 'Core/LoginComponent',
  component: LoginComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LoginComponentProps> = (args) => (
  <LoginComponent loading={false} onFinish={() => {}} />
);

export const Primary = Template.bind({});

Primary.args = {};
