import { action } from '@storybook/addon-actions';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import AddCommentForm from './AddCommentForm';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AddCommentForm> = {
  component: AddCommentForm,
  title: 'features/AddCommentForm',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
  decorators: [StoreDecorator({})],
};
