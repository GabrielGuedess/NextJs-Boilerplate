import js from '@eslint/js';
import globals from 'globals';
import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import unicorn from 'eslint-plugin-unicorn';
import prettier from 'eslint-plugin-prettier';
import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';
import noSecrets from 'eslint-plugin-no-secrets';
import tsParser from '@typescript-eslint/parser';
import pluginCypress from 'eslint-plugin-cypress/flat';
import perfectionist from 'eslint-plugin-perfectionist';
import jestFormatting from 'eslint-plugin-jest-formatting';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';

const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const config = [
  comments.recommended,

  ...compat.extends('airbnb'),
  ...compat.extends('@kesills/airbnb-typescript'),

  {
    ignores: ['**/*.html'],
  },

  {
    files: ['**/*.{js,mjs,ts,tsx}'],
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
    },

    plugins: {
      jest,
      react,
      unicorn,
      prettier,
      perfectionist,
      import: importPlugin,
      cypress: pluginCypress,
      'no-secrets': noSecrets,
      'jest-formatting': jestFormatting,
      '@typescript-eslint': typescriptEslint,
      'prefer-arrow-functions': preferArrowFunctions,
      'no-relative-import-paths': noRelativeImportPaths,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2024,
      sourceType: 'module',

      parserOptions: {
        project: ['tsconfig.eslint.json'],
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

    rules: {
      'no-console': 'error',
      'sort-imports': 'off',
      'unicorn/no-null': 'off',
      'no-else-return': 'error',
      'cypress/no-force': 'warn',
      'cypress/no-pause': 'error',
      'react/jsx-no-undef': 'off',
      'operator-linebreak': 'off',
      'jest/valid-expect': 'error',
      'prettier/prettier': 'error',
      'react/jsx-max-depth': 'off',
      'n/no-missing-import': 'off',
      'no-inline-comments': 'error',
      'react/jsx-sort-props': 'off',
      'object-curly-newline': 'off',
      'react/jsx-uses-vars': 'error',
      'no-warning-comments': 'error',
      'react/jsx-no-literals': 'off',
      'function-paren-newline': 'off',
      'react/hook-use-state': 'error',
      'react/jsx-uses-react': 'error',
      'node/no-missing-import': 'off',
      'jest/no-focused-tests': 'error',
      'jest/no-disabled-tests': 'warn',
      'react/jsx-curly-newline': 'off',
      'cypress/no-async-tests': 'error',
      'react/no-array-index-key': 'off',
      'implicit-arrow-linebreak': 'off',
      'jest/no-identical-title': 'error',
      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-nested-ternary': 'off',
      'import/no-default-export': 'error',
      'react/jsx-no-leaked-render': 'off',
      'node/no-unpublished-import': 'off',
      'jest/prefer-to-have-length': 'warn',
      'react/require-default-props': 'off',
      'unicorn/no-static-only-class': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/prefer-default-export': 'off',
      'react/prefer-read-only-props': 'off',
      'arrow-parens': ['error', 'as-needed'],
      'cypress/no-unnecessary-waiting': 'error',
      '@typescript-eslint/require-await': 'off',
      'cypress/unsafe-to-chain-command': 'error',
      '@typescript-eslint/no-unsafe-call': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      'cypress/no-assigning-return-values': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'react/jsx-no-constructed-context-values': 'off',
      'quote-props': ['error', 'consistent-as-needed'],
      'jest-formatting/padding-around-test-blocks': 'error',
      'jest-formatting/padding-around-describe-blocks': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@eslint-community/eslint-comments/no-use': ['error', { allow: [] }],
      'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import/no-duplicates': [
        'error',
        {
          'prefer-inline': true,
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
    files: ['eslint.config.mjs'],

    rules: {
      'quote-props': 'off',
      'import/no-default-export': 'off',
    },
  },

  {
    files: ['**/*.cy.ts', '**/*.cy.tsx'],

    rules: {
      'unicorn/prefer-module': 'off',
      '@typescript-eslint/no-var-requires': 'off',
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
];

export default config;
