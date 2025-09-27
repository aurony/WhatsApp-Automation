import { NavLink } from 'react-router-dom';
import { Bot, LayoutDashboard, MessageSquare, Users, Link, Settings, LifeBuoy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
const navItems = [
  { to: '/conversations', icon: MessageSquare, label: 'Conversations' },
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/contacts', icon: Users, label: 'Contacts' },
  { to: '/accounts', icon: Link, label: 'Accounts' },
];
const bottomNavItems = [
  { to: '/settings', icon: Settings, label: 'Settings' },
  { to: '/help', icon: LifeBuoy, label: 'Help & Support' },
];
const NavItem = ({ to, icon: Icon, label }: { to: string; icon: React.ElementType; label: string }) => (
  <TooltipProvider delayDuration={0}>
    <Tooltip>
      <TooltipTrigger asChild>
        <NavLink
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            cn(
              'flex items-center justify-center rounded-lg p-3 text-slate-500 transition-colors duration-200 hover:bg-slate-200 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50',
              isActive && 'bg-blue-500 text-white hover:bg-blue-600 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700'
            )
          }
        >
          <Icon className="h-6 w-6" />
          <span className="sr-only">{label}</span>
        </NavLink>
      </TooltipTrigger>
      <TooltipContent side="right" className="bg-slate-900 text-white dark:bg-white dark:text-slate-900">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
export function SidebarNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-20 flex-col border-r bg-slate-100/80 backdrop-blur-sm dark:bg-slate-900/80 dark:border-slate-800 md:flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <div className="group flex h-12 w-12 shrink-0 items-center justify-center gap-2 rounded-full bg-slate-900 text-lg font-semibold text-white dark:bg-white dark:text-slate-950 md:h-14 md:w-14 md:text-base">
          <Bot className="h-7 w-7 transition-all group-hover:scale-110" />
          <span className="sr-only">NexusFlow</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          {navItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </div>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        {bottomNavItems.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>
    </aside>
  );
}