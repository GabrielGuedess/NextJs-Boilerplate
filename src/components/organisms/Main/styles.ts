'use client';

import Image from 'next/image';

import styled from 'styled-components';

export const Wrapper = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  padding: 3rem;
`;

export const Next = styled(Image)`
  margin-top: 8rem;
`;
