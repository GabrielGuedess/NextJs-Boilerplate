import { addDecorator } from '@storybook/react';
import { withNextRouter } from 'storybook-addon-next-router';
import GlobalStyles from '../src/styles/global';

addDecorator(withNextRouter());

const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

export default decorators;
