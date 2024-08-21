import { Flex } from './Flex';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: 'shared/Stack/Flex',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const row: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>first</div>
        <div>second</div>
      </>
    ),
  },
};

export const column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>first</div>
        <div>second</div>
      </>
    ),
  },
};

export const rowGap4: Story = {
  args: {
    gap: '4',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>first</div>
        <div>second</div>
      </>
    ),
  },
};

export const rowGap8: Story = {
  args: {
    gap: '8',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>first</div>
        <div>second</div>
      </>
    ),
  },
};

export const rowGap16: Story = {
  args: {
    gap: '16',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>first</div>
        <div>second</div>
      </>
    ),
  },
};

export const rowGap32: Story = {
  args: {
    gap: '32',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>first</div>
        <div>second</div>
      </>
    ),
  },
};

export const columnGap4: Story = {
  args: {
    direction: 'column',
    gap: '4',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>first</div>
        <div>second</div>
      </>
    ),
  },
};

export const columnGap8: Story = {
  args: {
    direction: 'column',
    gap: '8',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>first</div>
        <div>second</div>
      </>
    ),
  },
};

export const columnGap16: Story = {
  args: {
    direction: 'column',
    gap: '16',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>first</div>
        <div>second</div>
      </>
    ),
  },
};

export const columnGap32: Story = {
  args: {
    direction: 'column',
    gap: '32',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>first</div>
        <div>second</div>
      </>
    ),
  },
};

export const columnAlignEnd: Story = {
  args: {
    direction: 'column',
    gap: '32',
    align: 'end',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>first</div>
        <div>second</div>
      </>
    ),
  },
};
