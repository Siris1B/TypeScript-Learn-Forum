import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { AvatarImg } from 'shared/assets/tests/storybook.jpg';

import { Theme } from '../../../app/providers/ThemeProvider';

import ProfilePage from './ProfilePage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
  title: 'pages/ProfilePage',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
};
