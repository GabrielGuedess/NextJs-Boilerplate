import { getTranslations } from 'next-intl/server';

import { Logo } from 'components/atoms/Logo';
import { ModeSwitcher } from 'components/molecules/ModeSwitcher';

const Page = async () => {
  const t = await getTranslations('home');

  return (
    <div data-cy="home" className="flex h-dvh w-full flex-col">
      <div className="p-4">
        <ModeSwitcher />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-40">
        <Logo />

        <div className="flex flex-col items-center gap-6">
          <h1 className="text-3xl font-bold">{t('title')}</h1>

          <span className="text-center text-xl text-neutral-500">
            {t('description')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
