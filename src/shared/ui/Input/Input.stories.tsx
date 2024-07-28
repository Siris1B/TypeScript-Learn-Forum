import { Input } from './Input';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'shared/Input',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    placeholder: 'Type text',
    value: '123qwe',
  },
};
