import { Decorator } from '@storybook/react/*';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) => {
    console.log(theme);
    return (
      <div className={`app ${theme}`}>
        <Story />
      </div>
    );
  };
