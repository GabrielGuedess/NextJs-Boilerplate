import { type StoryFn, type Meta } from '@storybook/react';

import { LogoNext } from '.';

export default {
  title: 'Atoms/LogoNext',
  component: LogoNext,
} as Meta;

export const Default: StoryFn = () => <LogoNext />;
