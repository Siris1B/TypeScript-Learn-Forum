import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/Article';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { ArticleRating } from 'features/articleRating';

import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id: articleId } = useParams<{ id: string }>();

  if (!articleId) return null;

  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
      <Page
        className={classNames(cls.ArticleDetailsPage, {}, [className])}
      >
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={articleId} />
          <ArticleRating articleId={articleId} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={articleId} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
