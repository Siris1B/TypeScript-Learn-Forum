import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';

import { AppImage } from '../AppImage/AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton/Skeleton';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

export const Avatar = memo((props: AvatarProps) => {
  const { className, src, size = 100, alt, fallbackInverted } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      height={size}
      width={size}
      Svg={UserIcon}
    />
  );
  const fallback = <Skeleton height={size} width={size} border={'50%'} />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
});
