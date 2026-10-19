# React Todo App

A task management application built with **React 19**, **Vite**, and **SCSS**. The project focuses on reusable UI components, state management, modular architecture, and integration with a REST API.

## Features

- **Task management** — create and delete tasks.
- **Completion tracking** — mark tasks as completed or incomplete.
- **Search** — filter tasks by title and highlight matching text.
- **Task statistics** — display task-related information.
- **Task details** — open a separate page to view a task and its completion status.
- **Smooth animations** — animated task creation and deletion.
- **Quick navigation** — scroll to the first incomplete task.
- **REST API integration** — retrieve and update tasks through HTTP requests.
- **Reusable components** — shared buttons, input fields, and other UI elements.

## Tech Stack

- React 19
- JavaScript (ES Modules)
- Vite 7
- SCSS / Sass
- React Hooks
- Context API
- `useReducer` for task state management
- Fetch API for HTTP requests
- ESLint

## Architecture

The project uses a modular structure inspired by Feature-Sliced Design principles.

```text
src/
├── app/         # Application setup and routing
├── pages/       # Application pages
├── widgets/     # Composite UI components
├── features/    # User-facing features
├── entities/    # Task entity and state management
└── shared/      # API layer and reusable UI components
```

### State Management

Task state is managed with React's `useReducer` and shared through the Context API.

Custom hooks encapsulate task operations, search filtering, and navigation to incomplete tasks.

### API Integration

The frontend communicates with a REST API using the native Fetch API.

The API client currently targets:

```text
http://127.0.0.1:8000/tasks/
```

The application expects the backend to support task retrieval, creation, updates, and deletion.

## Getting Started

### Prerequisites

- Node.js
- npm
- A running backend that implements the expected task API

### 1. Clone the repository

```bash
git clone https://github.com/blayz19/To-do-react.git
cd To-do-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the backend

Start the compatible Python Todo API separately and make sure it is accessible at `http://127.0.0.1:8000`.

### 4. Start the frontend

```bash
npm run dev
```

Open the local URL displayed by Vite in your terminal.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run server` | Start the included JSON Server on port 3001 |

Note: The current API client points to port `8000`. Running JSON Server on port `3001` alone will not connect the frontend to the backend without changing the API configuration.

## Related Project

The frontend can be used with the Python Todo backend:

[Python Todo API](https://github.com/blayz19/python-todo)

## Author

**[blayz19](https://github.com/blayz19)**

[View repository](https://github.com/blayz19/To-do-react)
