import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Theme } from '../../../app/providers/ThemeProvider';

import MainPage from './MainPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MainPage> = {
  component: MainPage,
  title: 'pages/MainPage',
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
