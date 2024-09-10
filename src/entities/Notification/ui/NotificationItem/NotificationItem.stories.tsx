import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { NotificationItem } from './NotificationItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NotificationItem> = {
  component: NotificationItem,
  title: 'entities/Notification/NotificationItem',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: {
      id: '1',
      title: 'Повідомлення',
      description: 'Важливе 1',
    },
  },
  decorators: [StoreDecorator({})],
};
