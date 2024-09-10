import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { NotificationList } from './NotificationList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NotificationList> = {
  component: NotificationList,
  title: 'entities/Notification/NotificationList',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__URL__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: '1',
            title: 'Повідомлення',
            description: 'Важливе 1',
          },
          {
            id: '2',
            title: 'Повідомлення',
            description: 'Важливе 2',
          },
        ],
      },
    ],
  },
};
