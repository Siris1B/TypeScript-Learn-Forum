import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { AvatarDropdown } from './AvatarDropdown';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AvatarDropdown> = {
  component: AvatarDropdown,
  title: 'features/AvatarDropdown',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
