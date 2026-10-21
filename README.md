# Task Tracker — Frontend

React client for a full-stack task manager with JWT login and task management.

**Live demo:** https://task-tracker-frontend-lake-eta.vercel.app

**Backend repo:** https://github.com/Div776/task-tracker-backend

> The backend is hosted on a free tier, so the first login after idle time can take up to a minute.

<img width="1327" height="513" alt="Screenshot 2026-10-21 135500" src="https://github.com/user-attachments/assets/6fbb3553-e220-485b-90bd-fbada0aa770d" />


## Features

- Register and log in with JWT authentication
- Create, view, edit, and delete tasks
- Protected routes with automatic token handling (axios interceptor)
- Logout and session handling

## Tech Stack

React · Vite · React Router · Axios · Deployed on Vercel

## Run Locally

```bash
git clone https://github.com/Div776/task-tracker-frontend.git
cd task-tracker-frontend
npm install
npm run dev
```

Point the API base URL in `src/api/axios.js` to your backend (local or the live API).

## What I Built

I built the whole UI myself: the login and register pages, the task management screen, routing, and the axios setup that attaches the JWT to every request. I also connected it to my Spring Boot backend and deployed it.

## Author

Divyansh — [GitHub](https://github.com/Div776)
