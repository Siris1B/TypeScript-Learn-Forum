import { CommentCard } from './CommentCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommentCard> = {
  component: CommentCard,
  title: 'entities/Comment/CommentCard',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Ura' },
    },
  },
};

export const isLoading: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Ura' },
    },
    isLoading: true,
  },
};
