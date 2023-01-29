import { render, screen } from '@testing-library/react';

import { Main } from '.';

describe('<Main />', () => {
  it('should render the heading correctly', () => {
    const { container } = render(
      <Main
        title="React Avançado"
        description="Um desenvolvedor de frente para uma tela com código. TEST"
      />,
    );

    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = render(
      <Main
        title="React Avançado"
        description="Um desenvolvedor de frente para uma tela com código. TEST"
      />,
    );

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
