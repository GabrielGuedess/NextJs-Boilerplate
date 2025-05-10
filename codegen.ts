import 'dotenv/config';

import { type CodegenConfig } from '@graphql-codegen/cli';
import {
  URLResolver,
  JWTResolver,
  UUIDResolver,
  DateTimeResolver,
  DateTimeISOResolver,
  EmailAddressResolver,
} from 'graphql-scalars';

const config: CodegenConfig = {
  documents: ['./src/graphql/**/*.ts'],
  schema: process.env.NEXT_PUBLIC_API_URL,
  hooks: { afterOneFileWrite: 'prettier --write' },
  generates: {
    './src/graphql/generated/schema.json': {
      plugins: ['introspection'],
    },
    './src/graphql/generated/index.ts': {
      plugins: [
        'typescript',
        'typescript-msw',
        'typescript-operations',
        'typescript-react-apollo',
        'typescript-validation-schema',
      ],
      config: {
        schema: 'zod',
        withHOC: false,
        withHooks: true,
        strictScalars: true,
        reactApolloVersion: 3,
        withComponents: false,
        notAllowEmptyString: true,
        scalarSchemas: {
          DateTime: 'z.date()',
          DateTimeISO: 'z.string()',
          EmailAddress: 'z.string().email()',
        },
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
