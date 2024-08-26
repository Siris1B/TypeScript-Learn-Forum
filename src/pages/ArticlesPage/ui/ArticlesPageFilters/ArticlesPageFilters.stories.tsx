import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticlesPageFilters } from './ArticlesPageFilters';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticlesPageFilters> = {
  component: ArticlesPageFilters,
  title: 'pages/Article/ArticlesPageFilters',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
