import { theme } from 'styles/theme';

import * as S from './styles';

export const ColorsGrid = () =>
  Object.entries(theme.colors).map(([key, color]) => (
    <S.Wrapper key={key} color={color}>
      <S.Content>
        <strong>{key}</strong>
        <span>{color}</span>
      </S.Content>
    </S.Wrapper>
  ));
