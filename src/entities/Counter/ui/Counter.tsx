import { useDispatch } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';

import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={increment} data-testid="incBtn">
        increment
      </Button>
      <Button onClick={decrement} data-testid="decrBtn">
        decrement
      </Button>
    </div>
  );
};
