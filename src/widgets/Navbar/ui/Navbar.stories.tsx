import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Theme } from '../../../app/providers/ThemeProvider';

import { Navbar } from './Navbar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'widgets/Navbar',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const AuthNavbar: Story = {
  args: {},
  decorators: [StoreDecorator({ user: { authData: {} } })],
};
