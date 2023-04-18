import { renderWithTheme } from 'utils/tests/helpers';

import { Main } from '.';

describe('<Main />', () => {
  it('should render the main correctly', () => {
    const { container } = renderWithTheme(<Main />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
