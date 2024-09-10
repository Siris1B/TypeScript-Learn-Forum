import { BugButton } from 'app/providers/ErrorBoundary';
import { RatingCard } from 'entities/Rating';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      <BugButton />
      {t('Головна сторінка')}
      <RatingCard
        title={'Як вам стаття?'}
        feedbackTitle={'Залиште відгук'}
        hasFeedback
      />
    </Page>
  );
};

export default MainPage;
