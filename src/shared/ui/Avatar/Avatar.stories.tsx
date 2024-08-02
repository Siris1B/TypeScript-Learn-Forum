import AvatarImg from 'shared/assets/tests/storybook.jpg';

import { Avatar } from './Avatar';

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
