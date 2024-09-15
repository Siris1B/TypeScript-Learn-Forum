import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Dropdown } from 'shared/ui/Popups';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { getRouteAdmin, getRouteProfile } from 'shared/const/router';
interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useAppSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector(isUserAdmin);
  const isManager = useAppSelector(isUserManager);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      direction={'bottom left'}
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: t('Админка'),
                href: getRouteAdmin(),
              },
            ]
          : []),
        {
          content: t('Профіль'),
          href: getRouteProfile(authData.id),
        },
        {
          content: t('Вийти'),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    ></Dropdown>
  );
});
