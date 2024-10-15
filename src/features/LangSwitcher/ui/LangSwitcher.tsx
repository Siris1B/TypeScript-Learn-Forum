import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(
  ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
      i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
    };
    return (
      <Button
        className={classNames('"i18next/no-literal-string": 2', {}, [
          className,
        ])}
        theme={ThemeButton.CLEAR}
        onClick={toggle}
      >
        {t(short ? 'Укр' : 'Українська')}
      </Button>
    );
  },
);
