import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGAElement> {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGAElement>>;
  inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted, ...otherProps } = props;
  return (
    <Svg
      {...otherProps}
      className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
        className,
      ])}
    ></Svg>
  );
});
