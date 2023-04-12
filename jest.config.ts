import nextJest from 'next/jest';

import { type Config } from 'jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**/*.tsx',
    '!src/pages/**/*.tsx',
    '!src/**/stories.tsx',
    '!src/styles/**/*.ts',
    '!src/utils/tests/*.ts(x)?',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
};

export default createJestConfig(config);
