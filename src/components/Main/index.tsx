import * as S from './styles';

export type MainProps = {
  title: string;
  description: string;
};

export const Main = ({ title, description }: MainProps) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código. TEST"
    />
  </S.Wrapper>
);
