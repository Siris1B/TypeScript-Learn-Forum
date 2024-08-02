import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return error', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'Попович',
      first: 'Юра',
      city: 'Козятин',
      currency: Currency.UAH,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
