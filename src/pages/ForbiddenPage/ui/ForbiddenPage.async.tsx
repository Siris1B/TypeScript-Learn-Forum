import { lazy } from 'react';

export const ForbiddenPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error only for dev
      setTimeout(() => resolve(import('./ForbiddenPage')), 1000);
    }),
);
