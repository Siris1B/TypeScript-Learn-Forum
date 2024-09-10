import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

import cls from './ForbiddenPage.module.scss';

function ForbiddenPage() {
  const { t } = useTranslation('');
  return (
    <Page className={cls.ForbiddenPage}>
      {t('У вас немає прав на перегляд даної сторінки')}
    </Page>
  );
}

export default ForbiddenPage;
