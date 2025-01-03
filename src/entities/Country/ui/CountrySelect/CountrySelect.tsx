import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/Popups';

import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Canada, content: Country.Canada },
  { value: Country.Poland, content: Country.Poland },
  { value: Country.USA, content: Country.USA },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <ListBox
      className={className}
      value={value}
      defaultValue={t('Вкажіть країну')}
      label={t('Вкажіть валюту')}
      items={options}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top right"
    />
  );
});
