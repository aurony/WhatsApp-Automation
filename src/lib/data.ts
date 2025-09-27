import { Contact, Conversation, Account } from './types';
export const contacts: Contact[] = [
  {
    id: 'contact-1',
    name: 'Elena Petrova',
    avatarUrl: 'https://i.pravatar.cc/150?u=elena',
    onlineStatus: 'online',
    email: 'elena.p@example.com',
    phone: '+1 (555) 123-4567',
    aiInsights: {
      personalityTraits: ['Analytical', 'Detail-Oriented', 'Pragmatic'],
      communicationStyle: 'Prefers direct, data-driven communication. Best to provide clear evidence and avoid ambiguity.'
    }
  },
  {
    id: 'contact-2',
    name: 'Marcus Chen',
    avatarUrl: 'https://i.pravatar.cc/150?u=marcus',
    onlineStatus: 'offline',
    email: 'marcus.chen@example.com',
    phone: '+1 (555) 234-5678',
    aiInsights: {
      personalityTraits: ['Creative', 'Visionary', 'Enthusiastic'],
      communicationStyle: 'Responds well to brainstorming and future-focused ideas. Use visuals and metaphors.'
    }
  },
  {
    id: 'contact-3',
    name: 'Aisha Khan',
    avatarUrl: 'https://i.pravatar.cc/150?u=aisha',
    onlineStatus: 'online',
    email: 'aisha.k@example.com',
    phone: '+1 (555) 345-6789',
    aiInsights: {
      personalityTraits: ['Empathetic', 'Collaborative', 'Supportive'],
      communicationStyle: 'Values personal connection and team harmony. Use an encouraging and inclusive tone.'
    }
  },
  {
    id: 'contact-4',
    name: 'David Miller',
    avatarUrl: 'https://i.pravatar.cc/150?u=david',
    onlineStatus: 'offline',
    email: 'david.miller@example.com',
    phone: '+1 (555) 456-7890',
    aiInsights: {
      personalityTraits: ['Decisive', 'Results-Driven', 'Efficient'],
      communicationStyle: 'Appreciates brevity and clear action items. Get straight to the point.'
    }
  },
  {
    id: 'contact-5',
    name: 'Sophia Rossi',
    avatarUrl: 'https://i.pravatar.cc/150?u=sophia',
    onlineStatus: 'online',
    email: 'sophia.r@example.com',
    phone: '+1 (555) 567-8901',
    aiInsights: {
      personalityTraits: ['Inquisitive', 'Methodical', 'Knowledgeable'],
      communicationStyle: 'Engages with well-researched arguments and logical frameworks. Be prepared for detailed questions.'
    }
  },
];
export const conversations: Conversation[] = [
  {
    id: 'conv-1',
    contactId: 'contact-1',
    messages: [
      { id: 'msg-1-1', sender: 'contact', content: 'Hey, just checking in on the project status. How are things looking?', timestamp: '10:30 AM' },
      { id: 'msg-1-2', sender: 'user', content: 'Hi Elena! Things are going well. We just pushed the latest updates to staging.', timestamp: '10:31 AM' },
      { id: 'msg-1-3', sender: 'contact', content: 'That\'s great to hear! I\'ll take a look this afternoon.', timestamp: '10:31 AM' },
    ],
  },
  {
    id: 'conv-2',
    contactId: 'contact-2',
    messages: [
      { id: 'msg-2-1', sender: 'contact', content: 'Can you send over the Q3 report when you have a moment?', timestamp: 'Yesterday' },
      { id: 'msg-2-2', sender: 'user', content: 'Of course, Marcus. I\'ve just emailed it to you.', timestamp: 'Yesterday' },
    ],
  },
  {
    id: 'conv-3',
    contactId: 'contact-3',
    messages: [
      { id: 'msg-3-1', sender: 'contact', content: 'Just saw the new designs. They look fantastic! 🔥', timestamp: '9:15 AM' },
      { id: 'msg-3-2', sender: 'user', content: 'Thanks, Aisha! Glad you like them. The team worked really hard on it.', timestamp: '9:16 AM' },
    ],
  },
  {
    id: 'conv-4',
    contactId: 'contact-4',
    messages: [
      { id: 'msg-4-1', sender: 'user', content: 'Hi David, are we still on for our meeting at 2 PM?', timestamp: 'Yesterday' },
    ],
  },
  {
    id: 'conv-5',
    contactId: 'contact-5',
    messages: [
      { id: 'msg-5-1', sender: 'contact', content: 'The API integration is complete. Let me know if you run into any issues.', timestamp: '11:05 AM' },
      { id: 'msg-5-2', sender: 'user', content: 'Perfect, thanks Sophia! I\'ll start testing now.', timestamp: '11:06 AM' },
    ],
  },
];
export const accounts: Account[] = [
  {
    id: 'acc-1',
    phoneNumber: '+1 (555) 111-2222',
    status: 'active',
    linkedDate: '2023-08-15',
  },
  {
    id: 'acc-2',
    phoneNumber: '+44 20 7946 0958',
    status: 'pending',
    linkedDate: '2023-09-01',
  },
  {
    id: 'acc-3',
    phoneNumber: '+1 (555) 333-4444',
    status: 'disconnected',
    linkedDate: '2023-07-20',
  },
];