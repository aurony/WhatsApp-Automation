import React, { useState, useMemo } from 'react';
import { Search, User, Mail, Phone, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { contacts as allContacts } from '@/lib/data';
import { Contact } from '@/lib/types';
const ContactProfile = ({ contact }: { contact: Contact }) => (
  <motion.div
    key={contact.id}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
    className="flex-1 flex flex-col"
  >
    <ScrollArea className="flex-1">
      <div className="p-6 space-y-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4 border-4 border-white dark:border-slate-800 shadow-lg">
            <AvatarImage src={contact.avatarUrl} alt={contact.name} />
            <AvatarFallback className="text-3xl">{contact.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold">{contact.name}</h2>
          <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mt-1">
            <span className={cn("h-2 w-2 rounded-full", contact.onlineStatus === 'online' ? 'bg-green-500' : 'bg-slate-400')} />
            {contact.onlineStatus}
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg"><User className="h-5 w-5" /> Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-slate-500" />
              <span>{contact.email || 'No email provided'}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-slate-500" />
              <span>{contact.phone || 'No phone provided'}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg"><BrainCircuit className="h-5 w-5" /> AI Insights</CardTitle>
          </CardHeader>
          <CardContent>
            {contact.aiInsights ? (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Personality Traits</h4>
                  <div className="flex flex-wrap gap-2">
                    {contact.aiInsights.personalityTraits.map(trait => (
                      <Badge key={trait} variant="secondary">{trait}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Communication Style</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{contact.aiInsights.communicationStyle}</p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-500">No AI insights available for this contact.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  </motion.div>
);
export function ContactsPage() {
  const [selectedContactId, setSelectedContactId] = useState<string | null>(allContacts[0]?.id || null);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredContacts = useMemo(() =>
    allContacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);
  const selectedContact = allContacts.find(c => c.id === selectedContactId);
  return (
    <div className="grid h-screen w-full grid-cols-[300px_1fr] bg-slate-100 dark:bg-slate-950">
      <div className="flex flex-col border-r bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Contacts</h2>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search contacts..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Separator />
        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-1 p-2">
            {filteredContacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelectedContactId(contact.id)}
                className={cn(
                  'flex items-center gap-3 rounded-lg p-3 text-left transition-all hover:bg-slate-200 dark:hover:bg-slate-800',
                  selectedContactId === contact.id && 'bg-slate-200 dark:bg-slate-800'
                )}
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={contact.avatarUrl} alt={contact.name} />
                  <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <p className="font-semibold truncate">{contact.name}</p>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="flex flex-col bg-slate-100 dark:bg-slate-950">
        <AnimatePresence mode="wait">
          {selectedContact ? (
            <ContactProfile contact={selectedContact} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-500 dark:text-slate-400">
              <User className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold">Select a Contact</h3>
              <p>Choose a contact to view their profile and insights.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}