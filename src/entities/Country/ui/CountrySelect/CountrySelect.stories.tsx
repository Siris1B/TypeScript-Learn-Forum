import { CountrySelect } from './CountrySelect';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CountrySelect> = {
  component: CountrySelect,
  title: 'entities/CountrySelect',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const withError: Story = {
  args: {},
};

export const Loading: Story = {
  args: {},
};
