import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from './Input';

export default {
  title: 'Core/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const PhoneInput = Template.bind({});
export const SearchInput = Template.bind({});
export const PrimaryInput = Template.bind({});
export const PasswordInput = Template.bind({});
export const TextAreaInput = Template.bind({});
export const EditorInput = Template.bind({});

PrimaryInput.args = {
  placeholder: 'Username',
};

PasswordInput.args = {
  type: 'password',
  placeholder: 'Password',
};

TextAreaInput.args = {
  type: 'textarea',
  placeholder: 'TextArea',
};
SearchInput.args = {
  type: 'search',
  placeholder: 'Search',
};

PhoneInput.args = {
  type: 'phone',
  label: 'Phone number',
  placeholder: 'Phone',
};

EditorInput.args = {
  type: 'editor',
  label: 'Editor',
  placeholder: 'Editor...',
};
