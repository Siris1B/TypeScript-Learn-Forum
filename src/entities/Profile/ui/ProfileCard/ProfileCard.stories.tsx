import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook.jpg';

import { ProfileCard } from './ProfileCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard,
  title: 'entities/ProfileCard',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'Попович',
      first: 'Юра',
      city: 'Козятин',
      currency: Currency.UAH,
      avatar: AvatarImg,
    },
  },
};

export const withError: Story = {
  args: {
    error: 'true',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
