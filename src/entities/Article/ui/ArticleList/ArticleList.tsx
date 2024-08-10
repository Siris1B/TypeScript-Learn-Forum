import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, i) => (
      <ArticleListItemSkeleton className={cls.card} key={i} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        className={cls.card}
        key={article.id}
        article={article}
        view={view}
      />
    );
  };

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
});