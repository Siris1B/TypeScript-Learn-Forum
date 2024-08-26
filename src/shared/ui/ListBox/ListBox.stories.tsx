import { ListBox } from './ListBox';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ListBox> = {
  component: ListBox,
  title: 'shared/ListBox',
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          verticalAlign: 'center',
          paddingTop: '100px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};

export const topLeft: Story = {
  args: {
    direction: 'top left',
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};

export const topRight: Story = {
  args: {
    direction: 'top right',
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};

export const bottomLeft: Story = {
  args: {
    direction: 'bottom left',
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};

export const bottomRight: Story = {
  args: {
    direction: 'bottom right',
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};
