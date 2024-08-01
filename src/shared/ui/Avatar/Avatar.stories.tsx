import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '../../../app/providers/ThemeProvider';

import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'shared/Avatar',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { size: 150, src: AvatarImg },
};

export const Small: Story = {
  args: { size: 50, src: AvatarImg },
};
