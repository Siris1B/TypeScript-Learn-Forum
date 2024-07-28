import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '../../../app/providers/ThemeProvider';

import AboutPage from './AboutPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AboutPage> = {
  component: AboutPage,
  title: 'pages/AboutPage',
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
