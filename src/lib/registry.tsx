'use client';

import { useServerInsertedHTML } from 'next/navigation';

import React, { useState } from 'react';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import isPropValid from '@emotion/is-prop-valid';

export const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();

    styledComponentsStyleSheet.instance.clearTag();

    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager
      shouldForwardProp={isPropValid}
      sheet={styledComponentsStyleSheet.instance}
    >
      {children}
    </StyleSheetManager>
  );
};
