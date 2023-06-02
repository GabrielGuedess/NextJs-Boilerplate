import styled from 'styled-components';

import { darken, rgba } from 'polished';

export const Wrapper = styled.table`
  border-collapse: collapse;

  width: 100%;

  font-family: sans-serif;
  font-size: 16px;
  color: #ffffff;

  border: none !important;

  thead {
    tr {
      border: none !important;
    }

    th {
      padding: 0.75rem 1rem;

      text-align: left;

      border-top: none !important;
      border-right: none !important;
      border-left: none !important;
    }
  }

  tbody {
    tr {
      border: none !important;

      &:nth-child(even) {
        background-color: ${rgba('#292c2e', 0.1)};
      }
    }

    td {
      padding: 0.75rem 1rem;
      color: ${darken(0.3, '#cccccc')};
      border: none !important;

      :first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  }
`;
