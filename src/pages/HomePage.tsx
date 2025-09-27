import { Outlet } from 'react-router-dom';
import { SidebarNav } from '@/components/SidebarNav';
export function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full bg-slate-50 dark:bg-slate-950">
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-slate-950">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f633,transparent)]"></div>
      </div>
      <SidebarNav />
      <main className="flex flex-1 flex-col md:ml-20">
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}