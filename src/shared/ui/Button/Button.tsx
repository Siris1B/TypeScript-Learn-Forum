import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';

import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
  L = 'size_l',
  M = 'size_m',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    children,
    theme = ThemeButton.OUTLINE,
    square,
    size = SizeButton.L,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
    [styles.disabled]: disabled,
  };
  return (
    <button
      disabled={disabled}
      className={classNames(styles.ButtonClass, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
