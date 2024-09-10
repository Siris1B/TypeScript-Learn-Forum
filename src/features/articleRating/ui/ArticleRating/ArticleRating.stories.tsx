import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticleRating from './ArticleRating';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleRating> = {
  component: ArticleRating,
  title: 'features/ArticleRating',
  decorators: [
    StoreDecorator({
      user: {
        authData: { id: '1' },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { articleId: '1' },

  parameters: {
    mockData: [
      {
        url: `${__API__URL__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
          {
            rate: 4,
          },
        ],
      },
    ],
  },
};

export const WithoutRate: Story = {
  args: { articleId: '1' },

  parameters: {
    mockData: [
      {
        url: `${__API__URL__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
};
