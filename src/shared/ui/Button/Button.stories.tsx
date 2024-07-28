import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '../../../app/providers/ThemeProvider/index';

import { Button, SizeButton, ThemeButton } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'shared/Button',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR_INVERTED,
  },
};

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L,
  },
};

export const OutlineXL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
  },
};

export const BackgroundThemeInverted: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};

export const SquareM: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.M,
  },
};

export const SquareL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.L,
  },
};

export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: '>',
    theme: ThemeButton.OUTLINE,
    disabled: true,
  },
};
