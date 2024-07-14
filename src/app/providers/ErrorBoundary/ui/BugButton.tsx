import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button onClick={onThrow} theme={ThemeButton.CLEAR}>
      throw error
    </Button>
  );
};
