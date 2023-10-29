import { type ComponentProps } from 'react';

export type LogoNextProps = {
  width?: number;
  height?: number;
} & ComponentProps<'svg'>;
