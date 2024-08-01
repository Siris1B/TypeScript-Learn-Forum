import { Select } from './Select';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'shared/Select',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Оберіть значення',
    options: [
      { value: '123', content: 'Перший' },
      { value: '1234', content: 'Другий' },
      { value: '12356', content: 'Третый' },
    ],
  },
};
