import { LoginForm } from './LoginForm';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {},
};
