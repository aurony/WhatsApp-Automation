import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { DashboardPage } from "./pages/DashboardPage";
import { ConversationsPage } from "./pages/ConversationsPage";
import { ContactsPage } from "./pages/ContactsPage";
import { AccountsPage } from "./pages/AccountsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { HelpPage } from "./pages/HelpPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "conversations", element: <ConversationsPage /> },
      { path: "contacts", element: <ContactsPage /> },
      { path: "accounts", element: <AccountsPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "help", element: <HelpPage /> },
      // Redirect any other path to the dashboard as a default
      { path: "*", element: <Navigate to="/" replace /> }
    ]
  },
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
)