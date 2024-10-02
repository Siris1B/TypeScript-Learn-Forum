import { ArticleViewSelector } from './ArticleViewSelector';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleViewSelector> = {
  component: ArticleViewSelector,
  title: 'entities/Article/ArticleViewSelector',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
