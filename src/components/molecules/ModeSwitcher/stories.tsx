import { type Meta, type StoryObj } from '@storybook/react';

import { ModeSwitcher } from '.';

const meta = {
  component: ModeSwitcher,
  title: 'Molecules/ModeSwitcher',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ModeSwitcher>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
