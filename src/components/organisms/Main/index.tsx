import { Logo } from 'components/atoms/Logo';

import * as S from './styles';

export const Main = () => (
  <S.Wrapper data-cy="home">
    <Logo />

    <S.Next
      src="/svg/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
  </S.Wrapper>
);
