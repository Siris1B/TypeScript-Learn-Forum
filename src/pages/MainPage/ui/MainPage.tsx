import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      <BugButton />
      {t('Головна сторінка')}
    </div>
  );
};

export default MainPage;
