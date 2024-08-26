import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';

import { AppLink } from '../AppLink/AppLink';

import cls from './Dropdown.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  direction?: DropdownDirection;
  trigger: ReactNode;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top right': cls.optionsTopRight,
  'top left': cls.optionsTopLeft,
};

export function Dropdown(props: DropdownProps) {
  const { className, trigger, items, direction = 'bottom right' } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <MenuButton className={cls.btn}>{trigger}</MenuButton>
      <MenuItems className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          if (item.href) {
            return (
              <MenuItem
                as={AppLink}
                to={item.href}
                key={index}
                disabled={item.disabled}
                className={cls.menuItem}
              >
                <button
                  type="button"
                  disabled={item.disabled}
                  onClick={item.onClick}
                  className={classNames(cls.item, {}, [])}
                >
                  {item.content}
                </button>
              </MenuItem>
            );
          }

          return (
            <MenuItem as={Fragment} disabled={item.disabled} key={index}>
              <button
                type="button"
                disabled={item.disabled}
                onClick={item.onClick}
                className={classNames(cls.item, {}, [cls.menuItem])}
              >
                {item.content}
              </button>
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}
