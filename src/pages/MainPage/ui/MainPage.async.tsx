import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error only for dev
      setTimeout(() => resolve(import('./MainPage')), 1000);
    }),
);
