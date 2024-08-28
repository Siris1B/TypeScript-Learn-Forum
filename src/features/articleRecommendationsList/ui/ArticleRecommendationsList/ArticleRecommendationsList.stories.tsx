import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

import type { Meta, StoryObj } from '@storybook/react';

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: { id: '1', username: '123' },
  blocks: [],
  type: [],
  title: '123',
  subtitle: 'asfsa',
};

const meta: Meta<typeof ArticleRecommendationsList> = {
  component: ArticleRecommendationsList,
  title: 'features/ArticleRecommendationsList',
  parameters: {
    mockData: [
      {
        url: `${__API__URL__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
        ],
      },
    ],
  },
};

console.log(__API__URL__ + '/articles?_limit=3');

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
