import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 3rem;

  color: #fff;
  text-align: center;

  background-color: #06092b;
`;

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  width: min(30rem, 100%);
  margin-top: 3rem;
`;
