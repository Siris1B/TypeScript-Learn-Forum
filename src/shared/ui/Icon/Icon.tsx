import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGAElement>>;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg } = props;
  return <Svg className={classNames(cls.Icon, {}, [className])}></Svg>;
});