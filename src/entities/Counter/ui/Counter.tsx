import { Button } from 'shared/ui/Button/Button';

import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const counterValue = useCounterValue();
  const { increment, decrement, add } = useCounterActions();

  const handleInc = () => {
    increment();
  };

  const handleDec = () => {
    decrement();
  };

  const addFive = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={handleInc} data-testid="incBtn">
        increment
      </Button>
      <Button onClick={handleDec} data-testid="decrBtn">
        decrement
      </Button>
      <Button onClick={addFive} data-testid="addFive">
        5
      </Button>
    </div>
  );
};
