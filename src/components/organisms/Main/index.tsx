import { Logo } from 'components/atoms/Logo';
import { LogoNext } from 'components/atoms/LogoNext';

import * as S from './styles';

export const Main = () => (
  <S.Wrapper data-cy="home">
    <Logo />

    <LogoNext style={{ marginTop: '8rem' }} />
  </S.Wrapper>
);
