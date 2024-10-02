import { useTranslation } from 'react-i18next';
// eslint-disable-next-line feature-sliced-import-checker/layer-imports-checker
import { BugButton } from 'app/providers/ErrorBoundary';
import { Page } from 'widgets/Page';
import { Counter } from 'entities/Counter';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page data-testid="MainPage">
      <BugButton />
      {t('Головна сторінка')}
      <Counter />
    </Page>
  );
};

export default MainPage;
