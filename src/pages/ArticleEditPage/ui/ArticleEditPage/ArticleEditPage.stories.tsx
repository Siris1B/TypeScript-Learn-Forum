import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticleEditPage from './ArticleEditPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleEditPage> = {
  component: ArticleEditPage,
  title: 'pages/ArticleEditPage',
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const page: Story = {
  args: {},
};
// export const row: Story = {
//   args: {},
// };
