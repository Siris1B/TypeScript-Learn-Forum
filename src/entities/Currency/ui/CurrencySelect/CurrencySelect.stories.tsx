import { CurrencySelect } from './CurrencySelect';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CurrencySelect> = {
  component: CurrencySelect,
  title: 'entities/CurrencySelect',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
