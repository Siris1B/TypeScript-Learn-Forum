import ArticleDetailsPage from './ArticleDetailsPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleDetailsPage> = {
  component: ArticleDetailsPage,
  title: 'pages/ArticleDetailsPage',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
