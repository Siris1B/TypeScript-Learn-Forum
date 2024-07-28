import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { LoginForm } from './LoginForm';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: 'features/LoginForm',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {},
  decorators: [
    StoreDecorator({ loginForm: { username: '123', password: '3' } }),
  ],
};

export const withError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: '3', error: 'error' },
    }),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { isLoading: true },
    }),
  ],
};
