import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';

import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from '../../model/selectors/recommendations';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { articleDetailsPageReducer } from '../../model/slices';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id: articleId } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading,
  );
  const recommendationsError = useSelector(getArticleRecommendationsError);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
    dispatch(fetchArticleRecommendations());
  });

  if (!articleId) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Стаття не знайденна')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
      <Page
        className={classNames(cls.ArticleDetailsPage, {}, [className])}
      >
        <Button onClick={onBackToList}>
          {t('Повернутись до переліку тем')}
        </Button>
        <ArticleDetails id={articleId} />
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t('Рекомендуємо')}
        />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={cls.recommendations}
          target="_blank"
        />
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t('Коментарі')}
        />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
