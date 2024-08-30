import { Button } from '../../../Button/Button';

import { Dropdown } from './Dropdown';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'shared/Dropdown',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'first',
      },
      {
        content: 'second',
      },
      {
        content: 'third',
      },
    ],
  },
};
