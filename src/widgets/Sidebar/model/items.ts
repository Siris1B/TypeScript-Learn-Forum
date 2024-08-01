import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGAElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'Головна',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'Про сайт',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Профіль',
    authOnly: true,
  },
];
