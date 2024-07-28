import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/types/DeepPartial';

export const StoreDecorator =
  (state: DeepPartial<StateSchema>): Decorator =>
  (Story) => {
    return (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    );
  };
