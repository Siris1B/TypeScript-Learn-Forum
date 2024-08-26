import { lazy } from 'react';

export const AdminPanelPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error only for dev
      setTimeout(() => resolve(import('./AdminPanelPage')), 1000);
    }),
);
