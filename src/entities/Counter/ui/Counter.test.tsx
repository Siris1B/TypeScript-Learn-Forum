import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import userEvent from '@testing-library/user-event';

import { Counter } from './Counter';

describe('Button', () => {
  test('Test render', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    await userEvent.click(screen.getByTestId('incBtn'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    await userEvent.click(screen.getByTestId('decrBtn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
