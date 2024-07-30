import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '../../../app/providers/ThemeProvider';

import ProfilePage from './ProfilePage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
  title: 'pages/ProfilePage',
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