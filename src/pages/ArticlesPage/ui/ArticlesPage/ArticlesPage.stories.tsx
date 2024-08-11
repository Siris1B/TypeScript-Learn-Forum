import ArticlesPage from './ArticlesPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticlesPage> = {
  component: ArticlesPage,
  title: 'pages/ArticlesPage',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
