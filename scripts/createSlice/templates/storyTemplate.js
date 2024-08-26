module.exports = (layer, componentName) => `
import { ${componentName} } from './${componentName}';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ${componentName}> = {
  component: ${componentName},
  title: '${layer}/${componentName}',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ${componentName}Normal: Story = {
  args: {}, }
`;
