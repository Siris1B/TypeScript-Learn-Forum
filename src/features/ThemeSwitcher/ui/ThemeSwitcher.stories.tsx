import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

import { ThemeSwitcher } from './ThemeSwitcher';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ThemeSwitcher> = {
  component: ThemeSwitcher,
  title: 'widgets/ThemeSwitcher',
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