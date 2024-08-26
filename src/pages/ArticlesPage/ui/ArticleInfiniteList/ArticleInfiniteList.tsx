import { memo } from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';

import { getArticles } from '../../model/slices/articlesPageSlice';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(
  (props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const articles = useAppSelector(getArticles.selectAll);
    const isLoading = useAppSelector(getArticlesPageIsLoading);
    const error = useAppSelector(getArticlesPageError);
    const view = useAppSelector(getArticlesPageView);

    if (error) {
      return <Text text={t('Помилка під час завантаження статей')} />;
    }

    return (
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
        className={className}
      />
    );
  },
);
