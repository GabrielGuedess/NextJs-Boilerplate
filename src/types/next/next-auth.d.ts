import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    document: string;
    full_name: string;
    __typename: string;
    validated: boolean;
    role: 'USER' | 'ADMIN';
    avatar_url: URL | null;
    active: boolean;
    updated_at: Date;
    created_at: Date;
  }

  interface Session {
    user: User;
    jti: string;
    iat: number;
    exp: number;
    token: string;
    user_id: string;
    token_expires: string;
    refresh_token: string;
    refresh_token_expires: string;
  }
}

declare module 'next-auth/jwt' {
  interface User {
    id: string;
    email: string;
    document: string;
    full_name: string;
    __typename: string;
    validated: boolean;
    role: 'USER' | 'ADMIN';
    avatar_url: URL | null;
    active: boolean;
    updated_at: Date;
    created_at: Date;
  }

  interface JWT {
    user: User;
    jti: string;
    iat: number;
    exp: number;
    token: string;
    user_id: string;
    token_expires: string;
    refresh_token: string;
    refresh_token_expires: string;
  }
}
