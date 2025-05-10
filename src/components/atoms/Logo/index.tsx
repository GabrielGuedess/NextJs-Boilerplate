import { type LogoProps } from './types';

export const Logo = ({ ...props }: LogoProps) => (
  <div className="with-shadow relative" {...props}>
    <div className="atom">
      <div className="electron" />
      <div className="electron second" />
      <div className="electron third" />
    </div>
  </div>
);
