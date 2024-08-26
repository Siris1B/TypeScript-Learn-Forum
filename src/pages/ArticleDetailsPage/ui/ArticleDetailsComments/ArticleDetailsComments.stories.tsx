import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetailsComments } from './ArticleDetailsComments';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleDetailsComments> = {
  component: ArticleDetailsComments,
  title: 'pages/ArticleDetailsComments',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ArticleDetailsCommentsNormal: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
