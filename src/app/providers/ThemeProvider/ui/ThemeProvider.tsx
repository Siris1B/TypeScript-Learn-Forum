import { FC, ReactNode, useMemo, useState } from 'react';

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

export interface IThemeProps {
  children?: ReactNode;
  initialTheme?: Theme;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<IThemeProps> = (props) => {
  const { children, initialTheme } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
