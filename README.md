# AdminFlow

> A modern, responsive and production-ready SaaS Admin Dashboard built with Next.js, TypeScript, Tailwind CSS, shadcn/ui and TanStack Query.

## 📌 Overview

**AdminFlow** is a modern SaaS administration dashboard designed to demonstrate production-quality frontend engineering.

The application allows authenticated administrators to manage users through a clean, responsive and accessible interface.

The project focuses on:

* Clean architecture
* Reusable components
* Type safety
* API integration
* Server-state management
* Responsive UI
* Accessibility
* Performance optimization
* Scalable code structure

---

## ✨ Features

### 🔐 Authentication

* Admin login
* Email/password authentication
* Form validation with Zod
* Loading states
* API error handling
* Protected dashboard routes
* Logout functionality
* Authentication state handling

### 📊 Dashboard

* Total Users
* Active Users
* Inactive Users
* New Users
* Responsive statistic cards
* Loading skeletons
* Error states
* API-driven statistics

### 👥 User Management

* User listing
* User avatar
* User name
* Email
* Role
* Status
* Created date
* Edit user
* Delete user
* Create user

### 🔎 Search

* Search users by name
* Search users by email
* Debounced search
* Clear search
* API-based search

### 🔽 Filtering

Filter users by:

* All roles
* Admin
* User
* Manager
* All statuses
* Active
* Inactive

Search, filtering and pagination work together.

### 📄 Pagination

* Previous/Next navigation
* Page numbers
* Total user count
* Current result range
* API-based pagination

Example:

`Showing 1–10 of 124 users`

### 📝 User Forms

Create and edit users using:

* React Hook Form
* Zod validation
* Accessible form controls
* Loading states
* Error handling
* Success notifications

### 🗑️ Delete Confirmation

Users must confirm before deletion.

The application provides:

* Cancel action
* Delete action
* Loading state
* Success notification
* Error handling

### 🌙 Dark Mode

AdminFlow supports:

* Light mode
* Dark mode

The theme is applied consistently throughout the application.

### 📱 Responsive Design

The dashboard is optimized for:

* Desktop
* Tablet
* Mobile

Special attention is given to:

* Sidebar
* Navigation
* Tables
* Forms
* Dialogs
* Dashboard cards

### ♿ Accessibility

The application follows basic accessibility practices:

* Semantic HTML
* Keyboard navigation
* Accessible labels
* Focus states
* Accessible dialogs
* Proper button labels
* Screen-reader-friendly interactions
* Sufficient color contrast

---

## 🛠️ Tech Stack

### Core

* Next.js
* React
* TypeScript

### Styling

* Tailwind CSS
* shadcn/ui

### State Management

* TanStack Query

### Forms & Validation

* React Hook Form
* Zod
* @hookform/resolvers

### UI & Utilities

* Lucide React
* Sonner
* clsx
* tailwind-merge

### Code Quality

* ESLint
* Prettier

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx
│   │
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── users/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── api/
│   │   ├── auth/
│   │   ├── users/
│   │   └── dashboard/
│   │
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── dashboard/
│   └── users/
│
├── hooks/
│   ├── use-auth.ts
│   ├── use-users.ts
│   ├── use-dashboard-stats.ts
│   └── use-debounce.ts
│
├── lib/
│   ├── api.ts
│   ├── auth.ts
│   └── utils.ts
│
├── schemas/
│   ├── login.schema.ts
│   └── user.schema.ts
│
├── types/
│   ├── auth.ts
│   ├── user.ts
│   ├── dashboard.ts
│   └── api.ts
│
└── providers/
    ├── query-provider.tsx
    └── theme-provider.tsx
```

---

## 🌐 API Endpoints

### Authentication

```text
POST /api/auth/login
```

### Users

```text
GET    /api/users
GET    /api/users/:id
POST   /api/users
PATCH  /api/users/:id
DELETE /api/users/:id
```

### Dashboard

```text
GET /api/dashboard/stats
```

---

## 🔐 Demo Credentials

For development/demo purposes:

```text
Email: admin@example.com
Password: Admin123!
```

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=
AUTH_SECRET=
```

Add only the variables actually required by the implemented authentication/API architecture.

Never commit real secrets to GitHub.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Enter the project

```bash
cd adminflow
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create:

```text
.env.local
```

and configure the required environment variables.

### 5. Start development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

---

## 🧪 Code Quality

Before submitting the project, run:

```bash
npm run lint
npm run build
```

The project should have:

* No TypeScript errors
* No unnecessary `any`
* No duplicated business logic
* No unnecessary `useEffect`
* No unnecessarily large components
* Clean API/service separation
* Reusable UI components

---

## ⚡ Performance

AdminFlow focuses on frontend performance through:

* TanStack Query caching
* Query invalidation
* Debounced search
* Server-side pagination
* Server-side filtering
* Efficient API requests
* Reusable components
* Proper Server/Client Component usage
* Avoiding unnecessary re-renders
* Loading skeletons

---

## 🔒 Security

The application follows basic frontend security practices:

* Protected dashboard routes
* Authentication checks
* Proper logout handling
* Authentication error handling
* Avoid exposing sensitive information
* Form validation
* API response validation
* No unnecessary password storage in frontend state

---

## 📦 Deployment

The application can be deployed to a suitable Next.js hosting platform.

Example production URL:

```text
https://adminflow.vercel.app
```

Replace this with the actual deployment URL after deployment.

---

## 📸 Screenshots

Add screenshots of:

```text
screenshots/
├── login.png
├── dashboard.png
├── users.png
├── create-user.png
└── dark-mode.png
```

---

## 🔮 Future Improvements

Possible future improvements:

* Role-Based Access Control
* User profile page
* Advanced analytics
* CSV export
* Bulk user deletion
* Column sorting
* URL-based filters
* Optimistic updates
* Unit tests
* E2E tests
* Storybook
* Internationalization
* PWA support

---

## 🎯 Project Goals

The main goal of AdminFlow is not simply to make the application work.

The project aims to demonstrate:

```text
Clean Code
     ↓
Good Architecture
     ↓
Great UX
     ↓
Performance
     ↓
Type Safety
     ↓
Production Ready SaaS Application
```

---

## 📋 Evaluation Focus

The project is designed around the following engineering areas:

| Category               |   Weight |
| ---------------------- | -------: |
| UI/UX                  |      15% |
| React & Next.js        |      20% |
| TypeScript             |      10% |
| API Integration        |      10% |
| State Management       |      10% |
| Component Architecture |      10% |
| Performance            |      10% |
| Accessibility & SEO    |       5% |
| Code Quality           |      10% |
| **Total**              | **100%** |

---

## 👨‍💻 Author

**Md Tayam Hasan Mahim**

GitHub: `<your-github-profile>`

Portfolio: `<your-portfolio-url>`

---

## 📄 

This project is created for educational, portfolio and coding-assignment purposes.
