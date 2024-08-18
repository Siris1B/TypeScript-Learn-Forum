import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error only for dev
      setTimeout(() => resolve(import('./ArticleEditPage')), 1000);
    }),
);
