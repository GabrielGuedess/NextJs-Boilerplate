import { render } from '@testing-library/react';

import { Logo } from '.';

describe('<Logo />', () => {
  it('should render the logo correctly', () => {
    const { container } = render(<Logo />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
