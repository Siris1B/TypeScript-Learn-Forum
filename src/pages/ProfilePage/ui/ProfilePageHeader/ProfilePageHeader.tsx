import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id == profileData?.id; // string == number????

  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack
      max
      justify={'between'}
      className={classNames('', {}, [className])}
    >
      <Text title={t('Профіль')} />
      {canEdit && (
        <>
          {readonly ? (
            <Button onClick={onEdit} theme={ThemeButton.OUTLINE}>
              {t('Редагувати')}
            </Button>
          ) : (
            <HStack gap={'8'}>
              <Button
                onClick={onCancelEdit}
                theme={ThemeButton.OUTLINE_RED}
              >
                {t('Вийти з редагування')}
              </Button>
              <Button onClick={onSave} theme={ThemeButton.OUTLINE}>
                {t('Зберегти зміни')}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  );
};
