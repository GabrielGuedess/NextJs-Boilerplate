import { render, screen } from '@testing-library/react';

import { Logo } from '.';

describe('<Logo />', () => {
  it('should render the logo correctly', () => {
    // Arrange
    const { container } = render(<Logo />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the logo without shadow', () => {
    render(<Logo hasShadow={false} />);

    // Assert
    expect(screen.getByLabelText(/logo react/i)).toHaveStyleRule(
      'display',
      'none',
      {
        modifier: '&::after',
      },
    );
  });
});
