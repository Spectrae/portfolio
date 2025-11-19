# 🚀 Modern Next.js Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-38BDF8?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)
![Status](https://img.shields.io/badge/Status-Production_Ready-success)

A fully production-grade **Next.js 14 Portfolio** built with **TypeScript**, **Tailwind CSS**, animations, dark mode, APIs, and reusable components.
Fast, scalable, modern, and optimized for real-world deployment.

---

# 📁 Project Folder Structure

```plaintext
portfolio/
├── public/                     # Static assets (images, icons, favicons)
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   └── github/route.ts # GitHub activity API route
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   │
│   ├── components/             # Reusable UI components
│   │   ├── navbar/             # Navigation bar components
│   │   ├── footer/             # Footer
│   │   ├── theme/              # Dark mode toggle
│   │   ├── sections/           # Main sections (Hero, About, Projects, etc.)
│   │   └── ui/                 # Buttons, cards, modals, effects
│   │
│   ├── data/                   # Editable data files
│   │   ├── projects.ts         # Projects list
│   │   ├── timeline.ts         # Experience timeline
│   │   └── certifications.ts   # Certifications list
│   │
│   ├── lib/                    # Utility functions
│   │   └── github.ts           # GitHub API helper
│   │
│   └── styles/                 # Global styles
│       └── globals.css
│
├── tests/                      # Jest + Playwright test files
│
├── .env.local                  # Environment variables
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

# ✨ Features

* ⚡ **Next.js 14 App Router**
* 🟦 **TypeScript-first codebase**
* 🎨 **Tailwind CSS + animations**
* 🌙 **Dark/Light mode with next-themes**
* 🧩 **Modular components**
* 🎯 **Project filtering**
* 📊 **GitHub activity feed**
* 📱 **Fully responsive**
* 🔍 **SEO optimized**
* 📬 **Contact form using API route**
* 🧪 **Testing with Jest + Playwright**

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Spectrae/portfolio
cd portfolio
```

---

## 2️⃣ Add Environment Variables

Create:

```bash
touch .env.local
```

Add:

```bash
NEXT_PUBLIC_GITHUB_USERNAME="your-github-username"

# Optional (recommended):
# GITHUB_TOKEN="your-token"
```

---

## 3️⃣ Install Dependencies

Using **pnpm**:

```bash
pnpm install
```

---

## 4️⃣ Start Development Server

```bash
pnpm dev
```

Check output at:
➡ [http://localhost:3000](http://localhost:3000)

---

# 🧪 Testing

### Unit Tests (Jest)

```bash
pnpm test
```

### E2E Tests (Playwright)

Start dev server:

```bash
pnpm dev
```

Run in another terminal:

```bash
pnpm test:e2e
```

---

# 🌐 Deployment (Vercel)

This project is 100% optimized for **Vercel**.

### Steps:

1. Push code to GitHub
2. Import into Vercel
3. Add environment variables:

```
NEXT_PUBLIC_GITHUB_USERNAME
GITHUB_TOKEN (optional)
```

4. Deploy 🚀

---

# 📊 GitHub Activity API

**Route:**

```
/api/github
```

**Cache:**
Revalidated every **10 minutes**:

```ts
fetch(url, { next: { revalidate: 600 } })
```

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 🤝 Contributing

Contributions, issues, and PRs are welcome!
