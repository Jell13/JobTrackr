# JobTrackr (Frontend)

The React frontend for JobTrackr, a job application tracker with a drag-and-drop Kanban board. This repo is the client application; it talks to a separate ASP.NET Core Web API backend for authentication and data.

**Live demo:** [add your Vercel URL here once deployed]
**Backend repo:** [add link to your JobTrackrAPI repo here]

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [How It Connects to the Backend](#how-it-connects-to-the-backend)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [License](#license)

## Overview

This is the client-side application for JobTrackr. Users sign in with Google or GitHub, then manage their job search on a Kanban board, adding applications as cards and dragging them between stages (wishlist, applied, interviewing, offer, rejected) as their status changes. State updates optimistically in the UI and syncs to the backend in the background, so the board feels instant even while a request is in flight.

## Features

- OAuth login via Google and GitHub
- Drag-and-drop Kanban board built with @dnd-kit/react
- Manual click-versus-drag detection on cards, so clicking a card opens its details instead of triggering a drag
- Optimistic UI updates for status changes, creation, and deletion
- Application detail view with edit and delete
- Responsive layout

## Tech Stack

- React
- TypeScript
- Vite
- @dnd-kit/react (drag-and-drop)
- react-router-dom

## Getting Started

### Prerequisites

- Node.js and npm
- A running instance of the [JobTrackr API](#) (locally or deployed), since this app has no backend of its own

### Setup

```bash
git clone https://github.com/<your-username>/jobtrackr-frontend.git
cd jobtrackr-frontend
npm install
```

Create a `.env` file in the project root (see [Environment Variables](#environment-variables) below), then run:

```bash
npm run dev
```

The app will start on Vite's default local port and expect the API to be reachable at whatever `VITE_API_URL` points to.

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_URL` | Base URL of the JobTrackr API (e.g. `http://localhost:5232` locally, or your Render URL in production) |

`.env` is not committed to the repository. Vite only exposes variables prefixed with `VITE_` to the client, so this is the one the app actually reads at build and run time.

## Project Structure

```
src/
├── pages/            # Route-level views (login, board, OAuth callback)
├── components/       # Reusable UI (Kanban cards, modals, drag area)
├── api/               # Functions that call the backend API
├── lib/               # Shared types, constants, and auth token helpers
└── App.tsx
```

## How It Connects to the Backend

Every API call includes a JWT access token in the `Authorization` header, retrieved from local storage via a shared `auth.ts` helper. When a user logs in through Google or GitHub, the backend returns an access token and a refresh token; both are stored client-side and used to authenticate subsequent requests. CORS on the backend is configured to allow only this app's deployed origin.

## Deployment

This app is deployed to [Vercel](https://vercel.com) as a static Vite build. The `VITE_API_URL` environment variable is set in the Vercel project settings to point at the deployed backend.

## Roadmap

- [ ] Automatic detection of an expired access token, with a silent refresh-and-retry instead of forcing a re-login
- [ ] Frontend test coverage (React Testing Library / Playwright)
- [ ] Logout flow that revokes the refresh token server-side

## License

MIT