import { StoryFn, Meta } from '@storybook/react';

import { Main, MainProps } from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default',
  },
} as Meta<MainProps>;

export const Basic: StoryFn<MainProps> = args => <Main {...args} />;

Basic.args = {
  title: 'title basic',
  description: 'description basic',
};

export const Default: StoryFn<MainProps> = args => <Main {...args} />;
