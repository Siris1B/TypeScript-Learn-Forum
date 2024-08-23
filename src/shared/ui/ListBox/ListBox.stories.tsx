import { ListBox } from './ListBox';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ListBox> = {
  component: ListBox,
  title: 'shared/ListBox',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Оберіть значення',
    items: [
      { value: '123', content: 'Перший' },
      { value: '1234', content: 'Другий' },
      { value: '12356', content: 'Третый' },
    ],
  },
};
