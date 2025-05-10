'use client';

import { useTheme } from 'next-themes';

import { Sun, Moon } from 'lucide-react';

import { cn } from 'utils/tailwind/cn';

import { type ModeSwitcherProps } from './types';

export const ModeSwitcher = ({ className, ...props }: ModeSwitcherProps) => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? (systemTheme ?? 'system') : theme;

  return (
    <button
      onClick={() => {
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
      }}
      className={cn(
        `
          flex size-10 cursor-pointer items-center justify-center rounded-full
          text-black outline-hidden transition-all
          hover:bg-primary-500/10 hover:text-primary-500
          focus:bg-primary-500/10 focus:text-primary-500
          dark:bg-zinc-900 dark:text-gray-300 dark:hover:bg-primary-500/10
          dark:hover:text-primary-500 dark:focus:bg-primary-500/10
          dark:focus:text-primary-500
        `,
        className,
      )}
      type="button"
      role="checkbox"
      aria-label="Mode Switcher"
      aria-checked={currentTheme === 'dark'}
      suppressHydrationWarning
      {...props}
    >
      <Sun size={20} className="dark:hidden" />

      <Moon
        className={`
          hidden
          dark:flex
        `}
        size={20}
      />
    </button>
  );
};
