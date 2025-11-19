# 🚀 Modern Next.js Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-38BDF8?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)
![Status](https://img.shields.io/badge/Status-Production_Ready-success)

A fully production-grade **Next.js 14 Portfolio** built with **TypeScript**, **Tailwind CSS**, animations, dark mode, APIs, and reusable components.
Flexible, fast, and optimized for real-world deployment.

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
│   │   ├── sections/           # Home sections (Hero, About, Projects, etc.)
│   │   └── ui/                 # Buttons, cards, modals, effects
│   │
│   ├── data/                   # Editable data files
│   │   ├── projects.ts         # Project entries
│   │   ├── timeline.ts         # Experience timeline
│   │   └── certifications.ts   # Certifications list
│   │
│   ├── lib/                    # Utility functions
│   │   └── github.ts           # GitHub API helpers
│   │
│   └── styles/                 # Global styles
│       └── globals.css
│
├── tests/                      # Jest + Playwright test files
│
├── .env.local                  # Environment variables (GitHub Username)
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

# ✨ Features

* ⚡ **Next.js 14 App Router**
* 🟦 **TypeScript**
* 🎨 **Tailwind CSS + Animations**
* 🌙 **Dark / Light mode (next-themes)**
* 🧩 **Modular components**
* 🎯 **Project filtering**
* 📊 **GitHub activity feed**
* 📱 **Fully responsive**
* 🔍 **SEO optimized**
* 📬 **Contact form (API route)**
* 🧪 **Testing (Jest + Playwright)**

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Spectrae/portfolio
cd portfolio
```

---

## 2️⃣ Create `.env.local`

```bash
touch .env.local
```

Add your GitHub username:

```bash
NEXT_PUBLIC_GITHUB_USERNAME="your-github-username"

# Optional for higher rate limits:
# GITHUB_TOKEN="your_token_here"
```

---

## 3️⃣ Install Dependencies (pnpm)

```bash
pnpm install
```

---

## 4️⃣ Start Development Server

```bash
pnpm dev
```

Visit:
➡ [http://localhost:3000](http://localhost:3000)

---

# 📝 How to Customize

## 🧩 Add or Edit Projects

Edit:

```
src/data/projects.ts
```

Add:

* name
* description
* tags
* GitHub URL
* Live URL
* image URL

---

## 🕒 Edit Experience

```
src/data/timeline.ts
```

Modify your:

* titles
* companies
* dates
* descriptions

---

## 📜 Update Certifications

```
src/data/certifications.ts
```

Supports any `react-icons` icon.

---

# 🧪 Testing

### Unit Tests (Jest + RTL)

```bash
pnpm test
```

### End-to-End Tests (Playwright)

Run dev server:

```bash
pnpm dev
```

Then:

```bash
pnpm test:e2e
```

---

# 🌐 Deployment (Vercel)

Optimized for **one-click Vercel deployment**.

### Steps:

1. Push repo to GitHub
2. Import into Vercel
3. Add environment variables:

```
NEXT_PUBLIC_GITHUB_USERNAME
GITHUB_TOKEN (optional)
```

4. Deploy 🎉

---

# 📊 GitHub Activity API

**Route:**

```
/api/github
```

**Caching:**
`10 minutes` via:

```ts
fetch(url, { next: { revalidate: 600 } })
```

---

# 📄 License

Licensed under the **MIT License**.

---

# 🤝 Contributing

Pull requests are welcome.
Open an issue if you'd like to request a feature or report a bug.
