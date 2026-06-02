# 💜 SheHub

SheHub is a community-driven initiative created by and for women who have completed a tech bootcamp or training program.

Its goal is to highlight female tech talent, support job placement, and build a collaborative and empowering network within the tech industry.

This repository contains the main SheHub website, developed with React + Vite, designed as a landing page for the project.

It includes information, resources, and contact forms for potential collaborators, partner companies, and new participants.


## 📁 Table of Contents

- [💜 SheHub](#-shehub)
- [📁 Table of Contents](#-table-of-contents)
- [💼 Tech Stack](#-tech-stack)
- [🛠️ Getting Started / Prerequisites](#️-getting-started--prerequisites)
- [⚙️ Installation](#️-installation)
- [🔐 Environment Variables](#-environment-variables)
- [💻 Run the Development Server](#-run-the-development-server)
- [📂 Project Structure](#-project-structure)
- [🌐 Language Support](#-language-support)

---

## 💼 Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js 15, React 19, TypeScript |
| **Styling** | Tailwind CSS 4, Radix UI |
| **Fonts** | Nunito, Ubuntu (via @fontsource) |
| **Backend** | Firebase (Auth + Firestore), Google OAuth |
| **State Management** | Redux Toolkit |
| **Theme** | next-themes (dark mode support) |
| **Testing** | Playwright, axe-core (accessibility) |
| **Tooling** | ESLint, Prettier |

---

## 🛠️ Getting Started / Prerequisites

Before running the project, make sure you have:

- **Node.js** v20+
- **npm** v10+
- A **Firebase** project with Auth and Firestore enabled

---

## ⚙️ Installation

```bash
git clone https://github.com/SheHub-es/shehub-website.git
cd shehub-website
npm install
```
---

## 🔐 Environment Variables

Create a `.env.local` file in the root of the project and add the following variables:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# LinkedIn OAuth
NEXT_PUBLIC_LINKEDIN_CLIENT_ID=
NEXT_PUBLIC_LINKEDIN_REDIRECT_URI=

# API
NEXT_PUBLIC_API_URL=
```

---

## 💻 Run the Development Server

```bash
npm run dev
```
Visit https://localhost:3000 in your browser

---

## 📂 Project Structure

```
src/
├── app/            # Next.js App Router pages and routes
├── components/     # React components
│   ├── ui/         # shadcn/ui base components
│   ├── icons/      # Icon components
│   ├── layout/     # Navbar, Footer, and layout components
│   └── shared/     # Shared reusable components
├── sections/       # Page-level sections (home, auth, heritage, etc.)
├── translations/   # i18n translation files (by page/feature)
├── store/          # Redux store and feature slices
├── providers/      # React context providers
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── services/       # External service integrations
├── interfaces/     # TypeScript interfaces
├── types/          # TypeScript type definitions
└── assets/         # Images and static assets
```
---

## 🌐 Language Support

SheHub supports three languages:

| Language | Code | Status |
|---|---|---|
| Spanish | `es` | Default |
| English | `en` | Supported |
| Catalan | `ca` | Supported |

Language is managed through a custom React Context-based i18n system — no external library required. The selected language is persisted via browser cookies and `localStorage`. Translation files are organised by feature under `src/translations/`.

---
### Made with 💜 by the SheHub team.