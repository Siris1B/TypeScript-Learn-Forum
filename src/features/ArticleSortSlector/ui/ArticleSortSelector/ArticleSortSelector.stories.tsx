import { ArticleSortSelector } from './ArticleSortSelector';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleSortSelector> = {
  component: ArticleSortSelector,
  title: 'entities/Article/ArticleSortSelector',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
