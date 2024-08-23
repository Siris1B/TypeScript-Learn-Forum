import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticlesPage from './ArticlesPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticlesPage> = {
  component: ArticlesPage,
  title: 'pages?Article/ArticlesPage',
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
