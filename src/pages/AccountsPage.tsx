import { PlusCircle, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { accounts } from '@/lib/data';
import { cn } from '@/lib/utils';
const statusStyles = {
  active: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
  pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
  disconnected: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
};
export function AccountsPage() {
  return (
    <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Accounts</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="transition-transform hover:scale-105 active:scale-95">
              <PlusCircle className="mr-2 h-4 w-4" />
              Link New Account
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Link a new WhatsApp Account</DialogTitle>
              <DialogDescription>
                Scan this QR code with your phone to link a new device.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=NexusFlowLinkAccount"
                alt="QR Code"
                className="rounded-md shadow-md"
              />
            </div>
            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
              Open WhatsApp on your phone, go to Settings &gt; Linked Devices &gt; Link a Device.
            </p>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {accounts.map((account) => (
          <Card key={account.id} className="transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle className="text-lg font-semibold">{account.phoneNumber}</CardTitle>
                <CardDescription>Linked on {new Date(account.linkedDate).toLocaleDateString()}</CardDescription>
              </div>
              <Badge className={cn('capitalize', statusStyles[account.status])}>{account.status}</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Refresh Connection</DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500 focus:bg-red-50 focus:text-red-600 dark:focus:bg-red-900/50 dark:focus:text-red-400">
                      Disconnect
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}