import { RatingCard } from './RatingCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RatingCard> = {
  component: RatingCard,
  title: 'entities/RatingCard',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
