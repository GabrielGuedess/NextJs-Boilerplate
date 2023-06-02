import { type StoryFn, type Meta } from '@storybook/react';

import { Logo } from '.';

import { type LogoProps } from './types';

export default {
  title: 'Atoms/Logo',
  component: Logo,
  args: {
    hasShadow: true,
  },
} as Meta<LogoProps>;

export const Default: StoryFn = args => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Logo {...args} />
  </div>
);
