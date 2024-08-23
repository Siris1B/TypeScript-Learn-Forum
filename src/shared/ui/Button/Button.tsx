import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { FC, forwardRef, memo, ReactNode } from 'react';

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

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
  disabled?: boolean;
  children?: ReactNode;
}

const ButtonComponent: FC<ButtonProps> = forwardRef(
  (props, ref = null) => {
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
        ref={ref}
        className={classNames(styles.ButtonClass, mods, [className])}
        {...otherProps}
      >
        {children}
      </button>
    );
  },
);

export const Button = memo(ButtonComponent);
