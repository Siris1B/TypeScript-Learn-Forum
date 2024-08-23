import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
  component: ArticleDetailsPageHeader,
  title: 'pages/ArticleDetailsPageHeader',
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
