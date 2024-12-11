import { useTheme } from 'next-themes';

import { Toaster } from 'sonner';

export const ToastProvider = () => {
  const { theme } = useTheme() as { theme: 'dark' | 'light' };

  return <Toaster theme={theme} richColors />;
};
