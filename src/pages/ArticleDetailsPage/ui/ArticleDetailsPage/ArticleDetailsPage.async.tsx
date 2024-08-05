import { lazy } from 'react';

export const ArticleDetailPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error only for dev
      setTimeout(() => resolve(import('./ArticleDetailsPage')), 1000);
    }),
);
