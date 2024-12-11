import next from '@next/eslint-plugin-next';

import js from '@eslint/js';
import globals from 'globals';
import parser from 'eslint-mdx';
import zod from 'eslint-plugin-zod';
import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import unicorn from 'eslint-plugin-unicorn';
import promise from 'eslint-plugin-promise';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import { FlatCompat } from '@eslint/eslintrc';
import storybook from 'eslint-plugin-storybook';
import importPlugin from 'eslint-plugin-import';
import noSecrets from 'eslint-plugin-no-secrets';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import tailwindcss from 'eslint-plugin-tailwindcss';
import perfectionist from 'eslint-plugin-perfectionist';
import reactCompiler from 'eslint-plugin-react-compiler';
import jestFormatting from 'eslint-plugin-jest-formatting';
import reactHooksExtra from 'eslint-plugin-react-hooks-extra';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';

const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const config = [
  comments.recommended,

  ...compat.extends('airbnb'),
  ...storybook.configs['flat/recommended'],
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('@kesills/airbnb-typescript'),
  ...compat.extends('@kesills/airbnb-typescript'),

  {
    ignores: [
      '**/*.mdx',
      '**/coverage',
      '**/plopfile.mjs',
      '**/storybook-static',
      '**/cypress.config.ts',
    ],
  },

  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    languageOptions: {
      parser: tsParser,

      ecmaVersion: 2024,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },

      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.browser,
        ...jest.environments.globals.globals,
        JSX: 'readonly',
        React: 'readonly',
      },
    },

    settings: {
      jest: {
        version: 'detect',
      },

      react: {
        version: 'detect',
      },

      'import/resolver': {
        typescript: {},

        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },

      tailwindcss: {
        whitelist: [],
        removeDuplicates: true,
        skipClassAttribute: false,
        tags: ['tw', 'cn', 'clsx'],
        cssFilesRefreshRate: 5_000,
        config: 'tailwind.config.ts',
        classRegex: '^class(Name)?$',
        callees: ['tw', 'cn', 'clsx'],
      },
    },

    plugins: {
      zod,
      jest,
      react,
      promise,
      unicorn,
      prettier,
      tailwindcss,
      perfectionist,
      '@next/next': next,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'no-secrets': noSecrets,
      'react-hooks': reactHooks,
      'react-compiler': reactCompiler,
      'jest-formatting': jestFormatting,
      'react-hooks-extra': reactHooksExtra,
      '@typescript-eslint': typescriptEslint,
      'prefer-arrow-functions': preferArrowFunctions,
      'no-relative-import-paths': noRelativeImportPaths,
      'readable-tailwind': eslintPluginReadableTailwind,
    },

    rules: {
      'no-console': 'error',
      'sort-imports': 'off',
      'unicorn/no-null': 'off',
      'no-else-return': 'error',
      'zod/prefer-enum': 'error',
      'promise/no-native': 'off',
      'promise/avoid-new': 'warn',
      'react/jsx-no-undef': 'off',
      'operator-linebreak': 'off',
      'jest/valid-expect': 'error',
      'prettier/prettier': 'error',
      'react/jsx-max-depth': 'off',
      'n/no-missing-import': 'off',
      'promise/no-nesting': 'warn',
      'zod/require-strict': 'error',
      'no-inline-comments': 'error',
      'react/jsx-sort-props': 'off',
      'object-curly-newline': 'off',
      'promise/valid-params': 'warn',
      'react/jsx-uses-vars': 'error',
      'no-warning-comments': 'error',
      'react/jsx-no-literals': 'off',
      'promise/param-names': 'error',
      'react/hook-use-state': 'error',
      'react/jsx-uses-react': 'error',
      'node/no-missing-import': 'off',
      'jest/no-focused-tests': 'error',
      'promise/always-return': 'error',
      'jest/no-disabled-tests': 'warn',
      'react/jsx-curly-newline': 'off',
      'promise/no-return-wrap': 'error',
      'promise/no-new-statics': 'error',
      'react/no-array-index-key': 'off',
      'implicit-arrow-linebreak': 'off',
      'jest/no-identical-title': 'error',
      'promise/catch-or-return': 'error',
      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-nested-ternary': 'off',
      'import/no-default-export': 'error',
      'react/jsx-no-leaked-render': 'off',
      'node/no-unpublished-import': 'off',
      'jest/prefer-to-have-length': 'warn',
      'react/require-default-props': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'unicorn/no-static-only-class': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/prefer-default-export': 'off',
      'react/prefer-read-only-props': 'off',
      'promise/no-return-in-finally': 'warn',
      'arrow-parens': ['error', 'as-needed'],
      'promise/no-multiple-resolved': 'error',
      'promise/no-promise-in-callback': 'warn',
      'promise/no-callback-in-promise': 'warn',
      'react-compiler/react-compiler': 'error',
      'readable-tailwind/sort-classes': 'error',
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/no-arbitrary-value': 'error',
      '@typescript-eslint/require-await': 'off',
      'tailwindcss/no-custom-classname': 'error',
      '@typescript-eslint/no-unsafe-call': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      '@typescript-eslint/no-misused-promises': 'off',
      'tailwindcss/migration-from-tailwind-2': 'error',
      '@typescript-eslint/no-floating-promises': 'off',
      'react/jsx-no-constructed-context-values': 'off',
      'quote-props': ['error', 'consistent-as-needed'],
      'tailwindcss/no-contradicting-classname': 'error',
      'react-hooks-extra/no-redundant-custom-hook': 'warn',
      'tailwindcss/no-unnecessary-arbitrary-value': 'error',
      'jest-formatting/padding-around-test-blocks': 'error',
      'readable-tailwind/no-unnecessary-whitespace': 'error',
      'tailwindcss/enforces-negative-arbitrary-values': 'error',
      'jest-formatting/padding-around-describe-blocks': 'error',
      'react-hooks-extra/no-direct-set-state-in-use-effect': 'warn',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      'react-hooks-extra/prefer-use-state-lazy-initialization': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@eslint-community/eslint-comments/no-use': ['error', { allow: [] }],
      'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import/no-duplicates': [
        'error',
        {
          'prefer-inline': true,
        },
      ],
      'readable-tailwind/multiline': [
        'error',
        {
          group: 'newLine',
        },
      ],

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],

      'react/no-unknown-property': [
        'error',
        {
          ignore: ['positions', 'rotation'],
        },
      ],

      'jsx-a11y/label-has-associated-control': [
        2,
        {
          controlComponents: ['Switch'],
        },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],

      'perfectionist/sort-enums': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'perfectionist/sort-exports': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.js', '.ts', '.jsx', '.tsx'],
        },
      ],

      'perfectionist/sort-union-types': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'perfectionist/sort-named-imports': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'perfectionist/sort-named-exports': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'perfectionist/sort-array-includes': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { prefix: '', rootDir: 'src', allowSameFolder: true },
      ],

      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],

      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          ts: 'never',
          jsx: 'never',
          tsx: 'never',
        },
      ],

      'perfectionist/sort-jsx-props': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
          groups: ['multiline', 'unknown', 'shorthand'],
        },
      ],

      'lines-between-class-members': [
        'error',
        {
          enforce: [
            {
              prev: 'method',
              next: 'method',
              blankLine: 'always',
            },
          ],
        },
      ],

      'no-secrets/no-secrets': [
        'error',
        {
          ignoreContent: [
            'CreateWorkSchedule',
            'WorkScheduleOverview',
            'DataTableWorkSchedule',
            'OrderByWithRelationInput',
          ],
        },
      ],

      'prefer-arrow-functions/prefer-arrow-functions': [
        'error',
        {
          singleReturnOnly: false,
          disallowPrototype: false,
          returnStyle: 'unchanged',
          allowNamedFunctions: false,
          classPropertiesAllowed: false,
        },
      ],

      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            ref: {
              reference: false,
            },

            args: {
              arguments: false,
            },

            env: {
              environment: false,
            },

            props: {
              properties: false,
            },
          },
        },
      ],

      'perfectionist/sort-classes': [
        'error',
        {
          order: 'asc',
          type: 'line-length',

          groups: [
            'index-signature',
            'static-property',
            'private-property',
            'property',
            'constructor',
            'static-method',
            'private-method',
            ['get-method', 'set-method'],
            'method',
            'unknown',
          ],
        },
      ],

      'perfectionist/sort-objects': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
          groups: [
            'id',
            'unknown',
            'active',
            'updated_at',
            'created_at',
            'deleted_at',
          ],

          customGroups: {
            id: '^id$',
            active: '^active$',
            updated_at: '^updated_at$',
            created_at: '^created_at$',
            deleted_at: '^deleted_at$',
          },
        },
      ],

      'perfectionist/sort-interfaces': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
          groups: [
            'id',
            'unknown',
            'active',
            'updated_at',
            'created_at',
            'deleted_at',
          ],

          customGroups: {
            id: '^id$',
            active: '^active$',
            updated_at: '^updated_at$',
            created_at: '^created_at$',
            deleted_at: '^deleted_at$',
          },
        },
      ],

      'perfectionist/sort-object-types': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
          groups: [
            'id',
            'unknown',
            'active',
            'updated_at',
            'created_at',
            'deleted_at',
          ],

          customGroups: {
            id: '^id$',
            active: '^active$',
            updated_at: '^updated_at$',
            created_at: '^created_at$',
            deleted_at: '^deleted_at$',
          },
        },
      ],

      'padding-line-between-statements': [
        'error',
        {
          prev: '*',
          next: 'try',
          blankLine: 'always',
        },
        {
          next: '*',
          prev: 'try',
          blankLine: 'always',
        },
        {
          next: '*',
          prev: 'var',
          blankLine: 'always',
        },
        {
          prev: '*',
          next: 'throw',
          blankLine: 'always',
        },
        {
          prev: '*',
          next: 'return',
          blankLine: 'always',
        },
        {
          prev: '*',
          next: 'export',
          blankLine: 'always',
        },
        {
          prev: '*',
          next: 'block-like',
          blankLine: 'always',
        },
        {
          next: '*',
          prev: 'block-like',
          blankLine: 'always',
        },
      ],

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          types: ['function'],
          selector: 'variable',
          format: ['PascalCase', 'camelCase'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '[A-Z]*Props$',
          },
        },
        {
          selector: 'interface',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '^I[A-Z]',
          },
        },
        {
          types: ['boolean'],
          selector: 'variable',
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
      ],

      'perfectionist/sort-imports': [
        'error',
        {
          order: 'asc',
          type: 'line-length',

          newlinesBetween: 'always',

          internalPattern: ['./schema/*', './types/*', './styles/*'],

          groups: [
            'side-effect',
            'type',
            'next',
            'react',
            'apollo',
            'graphql',
            'testing-library',
            'storybook',
            ['builtin', 'external'],
            'app',
            'pages',
            'hooks',
            'contexts',
            'components',
            'services',
            'lib',
            'functions',
            'dtos',
            'helpers',
            'utils',
            'assets',
            'constants',
            'storage',
            'styles',
            'stories',
            'internal',
            'internal-type',
            ['parent-type', 'sibling-type', 'index-type'],
            'style',
            ['parent', 'sibling', 'index'],
            ['internal-styles', 'internal-schema', 'internal-types'],
            'env',
            'object',
            'unknown',
          ],
          customGroups: {
            type: {
              app: ['^app/*'],
              lib: ['^lib/*'],
              env: ['^env/*'],
              dtos: ['^dtos/*'],
              pages: ['^pages/*'],
              hooks: ['^hooks/*'],
              utils: ['^utils/*'],
              assets: ['^assets/*'],
              styles: ['^styles/*'],
              helpers: ['^helpers/*'],
              storage: ['^storage/*'],
              stories: ['^stories/*'],
              contexts: ['^contexts/*'],
              services: ['^services/*'],
              functions: ['^functions/*'],
              constants: ['^constants/*'],
              components: ['^components/*'],
              'internal-types': ['./types/*'],
              'internal-styles': ['./styles/*'],
              'internal-schema': ['./schema/*'],
              next: ['^next', '^next-*', '^next/*', '^@next-*'],
              react: ['^react', '^react-*', '^react/*', '^@react-*'],
              storybook: ['^storybook', '^storybook-*', '^@storybook-*'],
              apollo: ['^apollo', '^apollo-*', '^apollo/*', '^@apollo-*'],
              graphql: ['^graphql', '^graphql-*', '^graphql/*', '^@graphql-*'],
              'testing-library': [
                '^testing-library',
                '^testing-library-*',
                '^@testing-library-*',
              ],
            },

            value: {
              app: ['^app/*'],
              lib: ['^lib/*'],
              env: ['^env/*'],
              dtos: ['^dtos/*'],
              pages: ['^pages/*'],
              hooks: ['^hooks/*'],
              utils: ['^utils/*'],
              assets: ['^assets/*'],
              styles: ['^styles/*'],
              helpers: ['^helpers/*'],
              storage: ['^storage/*'],
              stories: ['^stories/*'],
              contexts: ['^contexts/*'],
              services: ['^services/*'],
              functions: ['^functions/*'],
              constants: ['^constants/*'],
              components: ['^components/*'],
              'internal-types': ['./types/*'],
              'internal-styles': ['./styles/*'],
              'internal-schema': ['./schema/*'],
              next: ['^next', '^next-*', '^next/*', '^@next-*'],
              react: ['^react', '^react-*', '^react/*', '^@react-*'],
              storybook: ['^storybook', '^storybook-*', '^@storybook-*'],
              apollo: ['^apollo', '^apollo-*', '^apollo/*', '^@apollo-*'],
              graphql: ['^graphql', '^graphql-*', '^graphql/*', '^@graphql-*'],
              'testing-library': [
                '^testing-library',
                '^testing-library-*',
                '^@testing-library-*',
              ],
            },
          },
        },
      ],
    },
  },

  {
    rules: {
      'import/no-default-export': 'off',
    },

    files: [
      'codegen.ts',
      'plopfile.mjs',
      'jest.config.ts',
      '**/stories.tsx',
      'src/app/**/*.tsx',
      'cypress.config.ts',
      'postcss.config.mjs',
      'tailwind.config.ts',
      'commitlint.config.ts',
    ],
  },
  {
    files: ['**/tailwind.config.ts'],

    rules: {
      'quote-props': 'off',
      'global-require': 'off',
      'unicorn/prefer-module': 'off',
    },
  },
  {
    files: ['**/ModeSwitcher/index.tsx'],

    rules: {
      'jsx-a11y/role-supports-aria-props': 'off',
    },
  },
  {
    files: ['**/next.config.ts'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['**/utils/tests/**', '**/next.config.ts', '**/jest.config.ts'],

    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          types: ['function'],
          selector: 'variable',
          format: ['PascalCase', 'camelCase'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '[A-Z]*Props$',
          },
        },
        {
          selector: 'interface',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '^I[A-Z]',
          },
        },
        {
          types: ['boolean'],
          selector: 'variable',
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
      ],
    },
  },
  {
    files: ['eslint.config.mjs'],

    rules: {
      'quote-props': 'off',
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['**/graphql/queries/**', '**/graphql/mutations/**'],

    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['UPPER_CASE', 'snake_case'],
        },
      ],
    },
  },
  {
    files: ['src/lib/auth.ts'],

    rules: {
      'quote-props': 'off',
      'no-param-reassign': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    rules: {
      'unicorn/filename-case': 'off',
    },

    files: ['src/app/not-found.tsx', 'src/app/global-error.tsx'],
  },
  {
    files: ['**/**.js'],

    rules: {
      'no-undef': 'off',
      'unicorn/prefer-module': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: ['.storybook/**'],

    rules: {
      'no-param-reassign': 'off',
      'import/no-default-export': 'off',
      'node/no-extraneous-import': 'off',
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
  {
    files: ['**/spec.ts', '**/spec.tsx', '**/test.ts', '**/test.tsx'],

    rules: {
      'unicorn/prefer-module': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: ['**/**.mdx'],

    settings: {
      'mdx/code-blocks': true,
    },

    languageOptions: {
      parser,
      ecmaVersion: 5,
      sourceType: 'script',
    },

    rules: {
      'react/self-closing-comp': 'off',
      'react/jsx-no-target-blank': 'off',
      'jsx-a11y/heading-has-content': 'off',
      '@typescript-eslint/naming-convention': 'off',
    },
  },
  {
    files: ['**/generated/**'],

    rules: {
      'no-shadow': 'off',
      'no-use-before-define': 'off',
      'no-secrets/no-secrets': 'off',
      'unicorn/prevent-abbreviations': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
    },
  },
  {
    files: ['**/middleware.ts'],

    rules: {
      'no-restricted-exports': 'off',
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['**/**.d.ts'],

    rules: {
      'import/no-default-export': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',

      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  },
  {
    files: ['src/dtos/*'],

    rules: {
      'unicorn/filename-case': 'off',

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '[A-Z]*DTO$',
          },
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '[A-Z]*DTO$',
          },
        },
      ],
    },
  },
];

export default config;
