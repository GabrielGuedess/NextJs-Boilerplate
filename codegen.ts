import {
  URLResolver,
  JWTResolver,
  UUIDResolver,
  DateTimeResolver,
  DateTimeISOResolver,
  EmailAddressResolver,
} from 'graphql-scalars';

import { type CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  documents: ['./src/graphql/**/*.ts'],
  schema: 'http://localhost:3000/graphql',
  generates: {
    './src/graphql/generated/schema.json': {
      plugins: ['introspection'],
    },
    './src/graphql/generated/index.ts': {
      hooks: { afterOneFileWrite: 'eslint --fix' },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHOC: false,
        withHooks: true,
        reactApolloVersion: 3,
        withComponents: false,
        scalars: {
          Upload: 'File',
          JWT: JWTResolver.extensions.codegenScalarType,
          ID: UUIDResolver.extensions.codegenScalarType,
          URL: URLResolver.extensions.codegenScalarType,
          UUID: UUIDResolver.extensions.codegenScalarType,
          DateTime: DateTimeResolver.extensions.codegenScalarType,
          DateTimeISO: DateTimeISOResolver.extensions.codegenScalarType,
          EmailAddress: EmailAddressResolver.extensions.codegenScalarType,
        },
      },
    },
  },
};

export default config;
