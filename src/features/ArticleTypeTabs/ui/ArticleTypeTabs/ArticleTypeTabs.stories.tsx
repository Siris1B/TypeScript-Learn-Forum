import { ArticleTypeTabs } from './ArticleTypeTabs';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleTypeTabs> = {
  component: ArticleTypeTabs,
  title: 'entities/Article/ArticleTypeTabs',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
