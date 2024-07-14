import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';

import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../../../app/providers/ThemeProvider/index';

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
