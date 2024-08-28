import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { SuspenceDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenceDecorator';

import { Theme } from '../../src/app/providers/ThemeProvider/';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StyleDecorator,
    RouterDecorator,
    SuspenceDecorator,
  ],
};

export default preview;
