# VT Portfolio

A personal portfolio website with a React frontend and a Node.js/MongoDB backend. Features animated pages for About, Projects, Services, and a working Contact form that saves submissions to MongoDB and sends email notifications.

**Live:** https://vt-portfolio.info

---

## Features

- **About** — personal intro and background
- **Projects** — portfolio of work fetched from MongoDB with pagination
- **Services** — list of offered services fetched from MongoDB
- **Contact** — form that saves the message to MongoDB and sends an email via Nodemailer
- Smooth animations with Framer Motion
- Responsive UI built with MUI and SASS
- Global state management with Redux Toolkit
- Client-side routing with React Router v6

---

## Tech Stack

### Client (`/client`)

| Technology | Version |
|---|---|
| React | 18.x |
| TypeScript | 4.x |
| Vite | 5.x |
| Redux Toolkit | 2.x |
| MUI (Material UI) | 5.x |
| Framer Motion | 11.x |
| React Router | 6.x |
| SASS | 1.x |
| Formik + Yup | 2.x / 1.x |
| EmailJS | 4.x |
| react-hot-toast | 2.x |

### Server (`/server`)

| Technology | Version |
|---|---|
| Node.js | 18+ |
| Express | 4.x |
| MongoDB + Mongoose | 8.x |
| Nodemailer | 6.x |
| dotenv | 16.x |
| CORS | 2.x |

---

## Project Structure

```
vt-portfolio/
├── client/                  # React + Vite frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── projects/
│   │   │   └── services/
│   │   ├── components/      # Reusable UI components
│   │   ├── store/           # Redux store + slices
│   │   ├── reducers/        # Redux reducers
│   │   ├── animations/      # Framer Motion variants
│   │   ├── hooks/           # Custom React hooks
│   │   ├── helpers/         # Utility helpers
│   │   ├── context/         # React context providers
│   │   ├── routes/          # Route definitions
│   │   ├── shared/          # Shared UI components
│   │   ├── styles/          # Global SASS styles
│   │   └── utils/           # Utility functions
│   └── public/              # Static assets
│
└── server/                  # Express + MongoDB backend
    ├── config/
    │   └── collectionsConfig.js   # Model-to-route mapping
    ├── modules/
    │   ├── contacts.mongoose.js   # Contact schema
    │   ├── projects.mongoose.js   # Project schema
    │   └── services.mongoose.js   # Service schema
    ├── routers/
    │   ├── collectionsData.api.js # GET collections (paginated)
    │   └── contacts.api.js        # POST contact/save + email
    ├── utils/
    │   └── nodemailer.js          # Email transport setup
    └── index.js                   # Express entry point (port 4444)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or Atlas)
- pnpm

### Server setup

```bash
cd server
pnpm install
```

Create a `.env` file in `/server`:

```env
PORT=4444
MONGO_URL=your_mongodb_connection_string
USER_EMAIL=your_gmail_address
USER_PASSWORD=your_gmail_app_password
RECEIVER_EMAIL=email_to_receive_contact_messages
```

```bash
pnpm dev
```

### Client setup

```bash
cd client
pnpm install
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

---

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/:collectionName` | Get paginated collection data |
| GET | `/:collectionName/:id` | Get single item by ID |
| POST | `/:collectionName` | Save document + send email (contacts) |

Supported collections: `projects`, `services`, `contacts`

---

## Deployment

- **Frontend:** deployed on a custom domain `vt-portfolio.info`
- **Backend:** deployed separately (e.g. Render)
