import { ThemeProvider } from 'next-themes';

import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';

import { render } from 'utils/tests/helpers';

import { ModeSwitcher } from '.';

describe('<ModeSwitcher />', () => {
  it('should render the mode switcher correctly', async () => {
    const { container } = render(
      <ThemeProvider>
        <ModeSwitcher />
      </ThemeProvider>,
      { theme: 'system' },
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the mode switcher light', async () => {
    render(
      <ThemeProvider>
        <ModeSwitcher />
      </ThemeProvider>,
      { theme: 'light' },
    );

    const button = screen.getByLabelText('Mode Switcher');

    expect(button.getAttribute('aria-checked')).toBe('false');

    await userEvent.click(button);

    await waitFor(() => {
      expect(button.getAttribute('aria-checked')).toBe('true');
    });
  });

  it('should render the mode switcher dark', async () => {
    render(
      <ThemeProvider>
        <ModeSwitcher />
      </ThemeProvider>,
      { theme: 'dark' },
    );

    const button = screen.getByLabelText('Mode Switcher');

    expect(button.getAttribute('aria-checked')).toBe('true');

    await userEvent.click(button);

    await waitFor(() => {
      expect(button.getAttribute('aria-checked')).toBe('false');
    });
  });
});
