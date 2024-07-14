import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotFoundPage } from './NotFoundPage';

import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../../app/providers/ThemeProvider';

const meta: Meta<typeof NotFoundPage> = {
  component: NotFoundPage,
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
