import styled, { css } from 'styled-components';

import { getContrast } from 'polished';

type WrapperProps = {
  color: string;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ color }) => css`
    padding: 2rem;
    color: ${getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF'};
    background: ${color};
  `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: monospace;
  font-size: 13px;
`;
