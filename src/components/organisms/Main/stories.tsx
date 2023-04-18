import { type StoryFn, type Meta } from '@storybook/react';

import { Main } from '.';

export default {
  title: 'Organisms/Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default',
  },
} as Meta;

export const Default: StoryFn = () => <Main />;
