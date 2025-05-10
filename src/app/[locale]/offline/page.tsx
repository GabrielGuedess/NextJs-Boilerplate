import Link from 'next/link';

import { ModeSwitcher } from 'components/molecules/ModeSwitcher';

const Page = () => (
  <div className="flex h-dvh w-full flex-col">
    <div className="p-4">
      <ModeSwitcher />
    </div>

    <div className="flex flex-1 items-center justify-center gap-6">
      <h1 className="text-3xl">You are offline!</h1>

      <Link href="/" prefetch={false}>
        back home
      </Link>
    </div>
  </div>
);

export default Page;
