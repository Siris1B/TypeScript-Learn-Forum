import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import {
  getRouteArticleEdit,
  getRouteArticles,
} from 'shared/const/router';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { HStack } from 'shared/ui/Stack';

import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      if (article) {
        navigate(getRouteArticleEdit(article.id));
      }
    }, [article, navigate]);

    return (
      <HStack
        max
        justify="between"
        className={classNames('', {}, [className])}
      >
        <Button onClick={onBackToList}>
          {t('Повернутись до переліку тем')}
        </Button>
        {canEdit && (
          <Button onClick={onEditArticle}>{t('Редагувати')}</Button>
        )}
      </HStack>
    );
  },
);
