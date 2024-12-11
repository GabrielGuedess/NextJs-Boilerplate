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
          flex size-10 items-center justify-center rounded-full text-black
          outline-none transition-all
          dark:bg-zinc-900 dark:text-gray-300
          focus:bg-primary-500/10 focus:text-primary-500
          focus:dark:bg-primary-500/10 focus:dark:text-primary-500
          hover:bg-primary-500/10 hover:text-primary-500
          hover:dark:bg-primary-500/10 hover:dark:text-primary-500
        `,
        className,
      )}
      type="button"
      aria-label="Mode Switcher"
      aria-checked={currentTheme === 'dark'}
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
