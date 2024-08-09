import { CommentList } from './CommentList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommentList> = {
  component: CommentList,
  title: 'entities/Comment/CommentList',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Ura' },
      },
      {
        id: '2',
        text: 'hello world2',
        user: { id: '2', username: 'Ura2' },
      },
    ],
  },
};

export const isLoading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
};

export const NoComments: Story = {
  args: {
    comments: [],
  },
};
