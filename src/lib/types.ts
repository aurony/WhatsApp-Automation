export interface Message {
  id: string;
  sender: 'user' | 'contact';
  content: string;
  timestamp: string;
}
export interface AIInsights {
  personalityTraits: string[];
  communicationStyle: string;
}
export interface Contact {
  id: string;
  name: string;
  avatarUrl: string;
  onlineStatus: 'online' | 'offline' | 'typing...';
  email?: string;
  phone?: string;
  aiInsights?: AIInsights;
}
export interface Conversation {
  id:string;
  contactId: string;
  messages: Message[];
}
export interface Account {
  id: string;
  phoneNumber: string;
  status: 'active' | 'pending' | 'disconnected';
  linkedDate: string;
}