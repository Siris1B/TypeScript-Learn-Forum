import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { EditableProfileCard } from './EditableProfileCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EditableProfileCard> = {
  component: EditableProfileCard,
  title: 'features/EditableProfileCard',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EditableProfileCardNormal: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
