declare namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    NEXT_PUBLIC_API_URL: string;
  }
}
