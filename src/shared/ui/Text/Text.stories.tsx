import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '../../../app/providers/ThemeProvider/index';

import { Text, TextSize, TextTheme } from './Text';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'shared/Text',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description Description Description Description',
  },
};

export const onlyTitle: Story = {
  args: {
    title: 'Title lorem ipsum',
  },
};

export const onlyText: Story = {
  args: {
    text: 'Description Description Description Description',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description Description Description Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
  args: {
    title: 'Title lorem ipsum',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
  args: {
    text: 'Description Description Description Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR,
  },
};

export const ErrorDark: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description Description Description Description',
    size: TextSize.L,
  },
};

export const SizeM: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description Description Description Description',
    size: TextSize.M,
  },
};
