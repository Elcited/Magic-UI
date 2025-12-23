import { Outlet } from 'react-router';

export default function AuthLayout() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Outlet />
    </main>
  );
}
