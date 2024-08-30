import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import {
  Popover as HPopover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';

import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children?: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
  const {
    className,
    trigger,
    direction = 'bottom right',
    children,
  } = props;
  const { t } = useTranslation();
  const menuClasses = mapDirectionClass[direction];
  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupCls.popup])}
    >
      <PopoverButton as={'div'} className={popupCls.trigger}>
        {trigger}
      </PopoverButton>
      <PopoverPanel className={classNames(cls.panel, {}, [menuClasses])}>
        {children}
      </PopoverPanel>
    </HPopover>
  );
});
