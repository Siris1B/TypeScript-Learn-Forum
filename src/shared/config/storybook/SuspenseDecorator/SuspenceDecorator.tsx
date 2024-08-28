import { Decorator } from '@storybook/react/*';
import { Suspense } from 'react';

export const SuspenceDecorator: Decorator = (Story) => {
  return (
    <Suspense>
      <Story />
    </Suspense>
  );
};
