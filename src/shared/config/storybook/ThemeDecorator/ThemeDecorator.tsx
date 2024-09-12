import { Decorator } from '@storybook/react/*';
// eslint-disable-next-line feature-sliced-import-checker/layer-imports-checker
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Theme } from 'shared/const/theme';

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) => {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <Story />
        </div>
      </ThemeProvider>
    );
  };
