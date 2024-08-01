import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');

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
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профіль')} />
      {readonly ? (
        <Button
          onClick={onEdit}
          theme={ThemeButton.OUTLINE}
          className={cls.editBtn}
        >
          {t('Редагувати')}
        </Button>
      ) : (
        <>
          <Button
            onClick={onCancelEdit}
            theme={ThemeButton.OUTLINE_RED}
            className={cls.editBtn}
          >
            {t('Вийти з редагування')}
          </Button>
          <Button
            onClick={onSave}
            theme={ThemeButton.OUTLINE}
            className={cls.saveBtn}
          >
            {t('Зберегти зміни')}
          </Button>
        </>
      )}
    </div>
  );
};