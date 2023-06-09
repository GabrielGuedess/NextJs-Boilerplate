import React from 'react';

import { useDarkMode } from 'storybook-dark-mode';

import { type DocsContainerProps } from '@storybook/blocks';
import { DocsContainer } from '@storybook/blocks';
import { themes } from '@storybook/theming';

type DocumentContainerProps = {
  children: React.ReactNode;
} & DocsContainerProps;

export const DocumentContainer = ({
  children,
  ...rest
}: DocumentContainerProps) => {
  const isDark = useDarkMode();

  return (
    <DocsContainer {...rest} theme={isDark ? themes.dark : themes.light}>
      {children}
    </DocsContainer>
  );
};
