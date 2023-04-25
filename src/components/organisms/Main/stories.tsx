import { type StoryFn, type Meta } from '@storybook/react';

import { Main } from '.';

export default {
  title: 'Organisms/Main',
  component: Main,
} as Meta;

export const Default: StoryFn = () => <Main />;
