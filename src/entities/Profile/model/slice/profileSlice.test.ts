import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { ProfileSchema } from '../types/profile';
import { ValidateProfileError } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

import { profileActions, profileReducer } from './profileSlice';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'Попович',
  first: 'Юра',
  city: 'Козятин',
  currency: Currency.UAH,
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.setReadonly(true),
      ),
    ).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: '' },
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '' } };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: '123456' }),
      ),
    ).toEqual({ form: { username: '123456' } });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.pending(''),
      ),
    ).toEqual({ isLoading: true, validateErrors: undefined });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
