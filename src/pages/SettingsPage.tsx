import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
export function SettingsPage() {
  return (
    <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
      <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your personal information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the look and feel of the application.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <h3 className="font-medium">Theme</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Switch between light and dark mode.</p>
                </div>
                <ThemeToggle className="relative top-0 right-0" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Configure how you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="new-message" className="flex flex-col space-y-1">
                  <span>New Messages</span>
                  <span className="font-normal leading-snug text-slate-500 dark:text-slate-400">
                    Receive a notification for every new message.
                  </span>
                </Label>
                <Switch id="new-message" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <Label htmlFor="account-status" className="flex flex-col space-y-1">
                  <span>Account Status</span>
                  <span className="font-normal leading-snug text-slate-500 dark:text-slate-400">
                    Get notified if an account gets disconnected.
                  </span>
                </Label>
                <Switch id="account-status" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing</CardTitle>
              <CardDescription>Manage your subscription and payment details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Business Plan</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Next payment on Oct 25, 2024</p>
                  </div>
                  <Button>Manage Subscription</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}