import { type Meta, type StoryObj } from '@storybook/react';

import { Logo } from '.';

const meta = {
  component: Logo,
  title: 'Atoms/Logo',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Logo>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
