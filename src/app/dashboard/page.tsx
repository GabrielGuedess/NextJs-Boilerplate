import { ModeSwitcher } from 'components/molecules/ModeSwitcher';

const Page = () => (
  <div className="flex h-screen w-full flex-col">
    <div className="p-4">
      <ModeSwitcher />
    </div>

    <div className="flex flex-1 items-center justify-center">
      <h1>Dashboard</h1>
    </div>
  </div>
);

export default Page;
