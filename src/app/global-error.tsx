'use client';

import Link from 'next/link';
import type Error from 'next/error';

import { useEffect } from 'react';

import * as Sentry from '@sentry/nextjs';

type GlobalErrorProps = {
  error: { digest?: string } & Error;
};

const GlobalError = ({ error }: GlobalErrorProps) => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body>
        <div className="flex w-full flex-col items-center justify-center gap-7">
          <div className="text-center">
            <h2
              className={`
                mb-3 text-2xl font-bold text-black
                dark:text-white
              `}
            >
              Ops, algo de errado não está certo
            </h2>

            <p
              className={`
                mb-7 font-medium text-gray-500 transition-all
                dark:text-gray-300
              `}
            >
              A página que você procurava parece ter sido movida, excluída ou
              não existe.
            </p>

            <Link href="/dashboard">
              <button type="button">Voltar para Home</button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
