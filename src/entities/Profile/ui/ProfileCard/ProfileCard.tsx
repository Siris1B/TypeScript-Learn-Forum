import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';

import { Profile } from '../../model/types/profile';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading)
    return (
      <HStack
        max
        justify="center"
        className={classNames(cls.ProfileCard, {}, [
          className,
          cls.loading,
        ])}
      >
        <Loader />
      </HStack>
    );

  if (error) {
    return (
      <HStack
        max
        justify="center"
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
      >
        <Text
          title={t('Помилка завантаження профіля')}
          text={t('Спробуйте оновити сторінку')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap={'8'}
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify="center" max>
          <Avatar src={data?.avatar} />
        </HStack>
      )}
      <Input
        value={data?.first}
        placeholder={t("Ваше ім'я")}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid={'ProfileCard.firstname'}
      />
      <Input
        value={data?.lastname}
        placeholder={t('Ваше прізвище')}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid={'ProfileCard.lastname'}
      />
      <Input
        value={data?.age}
        placeholder={t('Ваш вік')}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('Місто')}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t("Ім'я користувача")}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Вкажіть посилання на аватар')}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        readonly={readonly}
        onChange={onChangeCurrency}
        value={data?.currency}
      />
      <CountrySelect
        readonly={readonly}
        onChange={onChangeCountry}
        value={data?.country}
      />
    </VStack>
  );
};
