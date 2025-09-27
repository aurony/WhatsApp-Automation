import React, { useState, useEffect, useRef } from 'react';
import { Send, Search, Smile, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { contacts, conversations as initialConversations } from '@/lib/data';
import { Contact, Conversation, Message } from '@/lib/types';
import { chatService } from '@/lib/chat';
export function ConversationsPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadConversations = async () => {
      const fetchedConversations = await chatService.getConversations();
      setConversations(fetchedConversations);
      if (fetchedConversations.length > 0) {
        setSelectedConversationId(fetchedConversations[0].id);
      }
    };
    loadConversations();
  }, []);

  const selectedConversation = conversations.find((c) => c.id === selectedConversationId);
  const selectedContact = contacts.find((c) => c.id === selectedConversation?.contactId);
  useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [selectedConversation?.messages]);
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversationId || isLoading) return;
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      content: newMessage.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setConversations((prev) =>
    prev.map((c) =>
    c.id === selectedConversationId ? { ...c, messages: [...c.messages, userMessage] } : c
    )
    );
    setNewMessage('');
    setIsLoading(true);
    try {
      const aiResponse = await chatService.sendMessage(userMessage.content);
      setConversations((prev) =>
      prev.map((c) =>
      c.id === selectedConversationId ? { ...c, messages: [...c.messages, aiResponse] } : c
      )
      );
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e as unknown as React.FormEvent);
    }
  };
  return (
    <div className="grid h-screen w-full grid-cols-[300px_1fr] bg-slate-100 dark:bg-slate-950">
      <div className="flex flex-col border-r bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Conversations</h2>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input placeholder="Search conversations..." className="pl-9" />
          </div>
        </div>
        <Separator />
        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-1 p-2">
            {conversations.map((conv) => {
              const contact = contacts.find((c) => c.id === conv.contactId);
              const lastMessage = conv.messages[conv.messages.length - 1];
              return (
                <button
                  key={conv.id}
                  onClick={() => setSelectedConversationId(conv.id)}
                  className={cn(
                    'flex items-center gap-3 rounded-lg p-3 text-left transition-all hover:bg-slate-200 dark:hover:bg-slate-800',
                    selectedConversationId === conv.id && 'bg-slate-200 dark:bg-slate-800'
                  )}>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={contact?.avatarUrl} alt={contact?.name} />
                    <AvatarFallback>{contact?.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 overflow-hidden">
                    <p className="font-semibold truncate">{contact?.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{lastMessage?.content}</p>
                  </div>
                  <span className="text-xs text-slate-400">{lastMessage?.timestamp}</span>
                </button>);
            })}
          </div>
        </ScrollArea>
      </div>
      <div className="flex flex-col">
        <AnimatePresence mode="wait">
          {selectedConversation && selectedContact ?
          <motion.div
            key={selectedConversation.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col h-full">
              <header className="flex items-center gap-4 border-b p-4 bg-slate-50 dark:bg-slate-900 dark:border-slate-800">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={selectedContact.avatarUrl} alt={selectedContact.name} />
                  <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-lg">{selectedContact.name}</p>
                  <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                    <span className={cn("h-2 w-2 rounded-full", selectedContact.onlineStatus === 'online' ? 'bg-green-500' : 'bg-slate-400')} />
                    {selectedContact.onlineStatus}
                  </div>
                </div>
              </header>
              <ScrollArea className="flex-1" ref={scrollAreaRef}>
                <div className="p-6 space-y-6">
                  {selectedConversation.messages.map((message) =>
                <div key={message.id} className={cn('flex items-end gap-2', message.sender === 'user' ? 'justify-end' : 'justify-start')}>
                      {message.sender === 'contact' &&
                  <Avatar className="h-8 w-8">
                          <AvatarImage src={selectedContact.avatarUrl} />
                          <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                  }
                      <div className={cn('max-w-md rounded-2xl px-4 py-3', message.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-slate-200 dark:bg-slate-800 rounded-bl-none')}>
                        <p>{message.content}</p>
                        <p className="text-xs mt-1 opacity-70 text-right">{message.timestamp}</p>
                      </div>
                    </div>
                )}
                  {isLoading &&
                <div className="flex items-end gap-2 justify-start">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={selectedContact.avatarUrl} />
                          <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="max-w-md rounded-2xl px-4 py-3 bg-slate-200 dark:bg-slate-800 rounded-bl-none">
                            <div className="flex items-center space-x-1">
                                <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse"></span>
                            </div>
                        </div>
                     </div>
                }
                </div>
              </ScrollArea>
              <footer className="border-t p-4 bg-slate-50 dark:bg-slate-900 dark:border-slate-800">
                <form onSubmit={handleSendMessage} className="relative">
                  <Textarea
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="pr-28 min-h-[52px] resize-none" />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <Button type="button" variant="ghost" size="icon"><Smile className="h-5 w-5 text-slate-500" /></Button>
                    <Button type="submit" size="icon" disabled={!newMessage.trim() || isLoading}>
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </footer>
            </motion.div> :
          <div className="flex flex-col items-center justify-center h-full text-slate-500 dark:text-slate-400">
              <MessageSquare className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold">Select a conversation</h3>
              <p>Choose from your existing conversations to start chatting.</p>
            </div>
          }
        </AnimatePresence>
      </div>
    </div>);
}