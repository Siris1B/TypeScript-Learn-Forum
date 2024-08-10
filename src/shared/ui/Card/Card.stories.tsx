import { Text } from '../Text/Text';

import { Card } from './Card';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'shared/Card',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    children: <Text title={'test'} text={'text test'} />,
  },
};
