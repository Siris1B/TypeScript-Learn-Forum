import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

import { Modal } from './Modal';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'shared/Modal',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore onsectetur adipisicing elit. T onsectetur adipisicing elit. T onsectetur adipisicing elit. Tonsectetur adipisicing elit. Tonsectetur adipisicing elit. Tonsectetur adipisicing elit. Tonsectetur adipisicing elit. T ',
  },
};

export const ClearDark: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore onsectetur adipisicing elit. T onsectetur adipisicing elit. T onsectetur adipisicing elit. Tonsectetur adipisicing elit. Tonsectetur adipisicing elit. Tonsectetur adipisicing elit. Tonsectetur adipisicing elit. T ',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
