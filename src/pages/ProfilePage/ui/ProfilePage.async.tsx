import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error only for dev
      setTimeout(() => resolve(import('./ProfilePage')), 1000);
    }),
);
