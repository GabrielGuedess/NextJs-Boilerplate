import { render } from '@testing-library/react';

import { LogoNext } from '.';

describe('<LogoNext />', () => {
  it('should render the heading', () => {
    const { container } = render(<LogoNext />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
