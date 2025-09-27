# NexusFlow

An elegant, minimalist web platform for managing AI-powered WhatsApp business communications.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/aurony/WhatsApp-Automation)

NexusFlow is an enterprise-grade, AI-powered communication platform designed to intelligently automate WhatsApp business messaging. Built on Cloudflare's cutting-edge serverless infrastructure, it provides a visually stunning and minimalist web-based dashboard for managing conversations, contacts, and AI-driven interactions. The application's core is a sophisticated conversations interface that mirrors the fluidity of native chat apps while integrating powerful AI capabilities like context-aware responses and personality analysis.

The system is designed for scalability and performance, leveraging Cloudflare Durable Objects for stateful agent management, ensuring that every user interaction is seamless, intelligent, and efficient.

## ✨ Key Features

-   **AI-Powered Conversations:** Intelligently automate WhatsApp business messaging with context-aware, human-like responses.
-   **Minimalist Dashboard:** A clean, uncluttered interface for managing conversations, contacts, and accounts.
-   **Real-Time Chat Interface:** A dual-pane UI for a seamless and intuitive messaging experience.
-   **Contact Management:** A directory of all contacts with detailed profiles and AI-generated personality insights.
-   **Serverless Architecture:** Built entirely on Cloudflare's serverless platform, including Workers and Durable Objects for high performance and scalability.
-   **Visually Stunning UI:** Crafted with obsessive attention to visual excellence, featuring smooth animations and a modern design.

## 🛠️ Technology Stack

-   **Frontend:** React, Vite, React Router, Tailwind CSS
-   **UI Components:** shadcn/ui, Lucide React, Framer Motion
-   **State Management:** Zustand
-   **Backend:** Cloudflare Workers, Hono
-   **Stateful Logic:** Cloudflare Durable Objects (via Cloudflare Agents SDK)
-   **AI Integration:** Cloudflare AI Gateway, OpenAI SDK
-   **Language:** TypeScript

## 🚀 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [Bun](https://bun.sh/) package manager
-   A Cloudflare account

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/nexusflow.git
    cd nexusflow
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

### Configuration

The application requires Cloudflare environment variables to connect to the AI Gateway.

1.  **Create a `.dev.vars` file** in the root of the project. This file is used by Wrangler for local development and is not committed to Git.
    ```bash
    touch .dev.vars
    ```

2.  **Add your Cloudflare credentials** to the `.dev.vars` file. You can find your Account ID and create an AI Gateway in your Cloudflare dashboard.
    ```ini
    CF_AI_BASE_URL="https://gateway.ai.cloudflare.com/v1/YOUR_ACCOUNT_ID/YOUR_GATEWAY_ID/openai"
    CF_AI_API_KEY="YOUR_CLOUDFLARE_API_KEY"
    ```
    Replace `YOUR_ACCOUNT_ID`, `YOUR_GATEWAY_ID`, and `YOUR_CLOUDFLARE_API_KEY` with your actual credentials.

## 💻 Development

To run the application locally, use the `dev` script. This command starts the Vite frontend development server and the Wrangler local server for the backend worker simultaneously.

```bash
bun dev
```

The application will be available at `http://localhost:3000` (or the port specified in your environment). The frontend will automatically reload on changes, and the worker will restart as you edit the backend code.

## 🚢 Deployment

This project is configured for seamless deployment to Cloudflare Pages.

1.  **Login to Cloudflare:**
    If you haven't already, authenticate Wrangler with your Cloudflare account.
    ```bash
    bunx wrangler login
    ```

2.  **Deploy the application:**
    The `deploy` script will build the frontend application and deploy both the static assets and the worker to your Cloudflare account.
    ```bash
    bun deploy
    ```

    Wrangler will guide you through the initial deployment process.

Alternatively, you can deploy directly from your GitHub repository using the button below.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/aurony/WhatsApp-Automation)

## 📂 Project Structure

-   `src/`: Contains the frontend React application.
    -   `components/`: Reusable UI components.
    -   `pages/`: Top-level page components for each route.
    -   `lib/`: Shared utilities, services, and type definitions.
    -   `main.tsx`: The main entry point for the React application.
-   `worker/`: Contains the backend Cloudflare Worker code.
    -   `agent.ts`: The core `ChatAgent` Durable Object implementation.
    -   `userRoutes.ts`: Hono route definitions for the API.
    -   `chat.ts`: Logic for handling AI chat completions and tool usage.
    -   `index.ts`: The entry point for the Cloudflare Worker.
-   `wrangler.jsonc`: Configuration file for the Cloudflare Worker and Pages deployment.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.