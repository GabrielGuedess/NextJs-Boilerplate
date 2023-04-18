import * as S from './styles';
import { type TokensGridProps } from './types';

export const TokensGrid = ({
  tokens,
  hasRemValue = false,
}: TokensGridProps) => (
  <S.Wrapper>
    <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
        {hasRemValue && <th>Pixels</th>}
      </tr>
    </thead>

    <tbody>
      {Object.entries(tokens).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
          {hasRemValue && <td>{Number(value.replace('rem', '')) * 10}px</td>}
        </tr>
      ))}
    </tbody>
  </S.Wrapper>
);
