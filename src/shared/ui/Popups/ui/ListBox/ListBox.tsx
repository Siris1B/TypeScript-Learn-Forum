import {
  Listbox as HListBox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';

import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './ListBox.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox(props: ListBoxProps) {
  const {
    className,
    readonly,
    direction = 'bottom right',
    items,
    label,
    value,
    defaultValue,
    onChange,
  } = props;
  const { theme } = useTheme();

  const optionsClasses = mapDirectionClass[direction];

  return (
    <HStack gap="4">
      {' '}
      {label && (
        <span className={readonly ? popupCls.disabled : ''}>
          {label + '>'}
        </span>
      )}{' '}
      <HListBox
        disabled={readonly}
        as={'div'}
        className={classNames(cls.ListBox, {}, [
          'app_modal',
          className,
          popupCls.popup,
        ])}
        value={value}
        onChange={onChange}
      >
        <ListboxButton
          as={Button}
          disabled={readonly}
          className={classNames(cls.button, {}, [])}
        >
          {value ?? defaultValue}
        </ListboxButton>
        <ListboxOptions
          className={classNames(cls.options, {}, [
            'app_modal',
            theme,
            optionsClasses,
          ])}
        >
          {items?.map((item) => (
            <ListboxOption
              className={classNames(
                cls.item,
                { [cls.disabled]: item.disabled },
                [popupCls.menuItem],
              )}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {item.content}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HListBox>
    </HStack>
  );
}
