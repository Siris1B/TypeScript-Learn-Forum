import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

import { Code } from './Code';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Code> = {
  component: Code,
  title: 'shared/Code',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    text: `import { Code } from './Code';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Code> = {
  component: Code,
  title: 'shared/Code',
};

export default meta;
type Story = StoryObj<typeof meta>;
`,
  },
};

export const Dark: Story = {
  args: {
    text: `import { Code } from './Code';
  
  import type { Meta, StoryObj } from '@storybook/react';
  
  const meta: Meta<typeof Code> = {
    component: Code,
    title: 'shared/Code',
  };
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  `,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  args: {
    text: `import { Code } from './Code';
    
    import type { Meta, StoryObj } from '@storybook/react';
    
    const meta: Meta<typeof Code> = {
      component: Code,
      title: 'shared/Code',
    };
    
    export default meta;
    type Story = StoryObj<typeof meta>;
    `,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
