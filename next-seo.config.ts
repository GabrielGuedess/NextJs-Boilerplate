import { type DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://github.com/GabrielGuedess/nextjs-boilerplate',
    site_name: 'Boilerplate NextJs',
    title: 'Boilerplate para projetos NextJs ⭐🚀',
  },
  twitter: {
    handle: '@GabrielRGuedess',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;
