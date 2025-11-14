Modern Next.js Portfolio

This is a production-ready portfolio website built from scratch using the latest web technologies, including Next.js, TypeScript, and Tailwind CSS. It features a modern design, dark mode, animations, and a component-based architecture.

✨ Features

Next.js 14 (App Router)

TypeScript

Tailwind CSS

Light / Dark Mode (with next-themes)

Modern UI/UX (Glassmorphism, Gradients, Animations)

Project Filtering (Client-side)

GitHub Activity Feed (via API route)

Reusable Components

Fully Responsive

SEO Optimized

Contact Form (API Route)

Testing (Jest, React Testing Library, Playwright)

🚀 Getting Started

1. Clone the Repository

git clone [https://github.com/Spectrae/portfolio](https://github.com/Spectrae/portfolio)
cd portfolio


2. Create Environment File

You must create a .env.local file in the root of the project for the GitHub feed to work.

touch .env.local


Then, open the .env.local file and add your GitHub username:

# .env.local
NEXT_PUBLIC_GITHUB_USERNAME="your-github-username-here"

# Optional: Create a GitHub token for better API rate limits
# GITHUB_TOKEN="your-github-token-here"


3. Install Dependencies

This project uses pnpm.

pnpm install


4. Run the Development Server

pnpm dev


Open http://localhost:3000 with your browser to see the result.

📝 Adding/Editing Content

This project is designed to be easily customizable.

Adding Projects

To add, edit, or remove projects from the Projects grid:

Open src/data/projects.ts.

Follow the Project interface to add your own project data.

Upload your project images to an image hosting service (like Cloudinary or Vercel) and update the image URL.

Adding Experience

To update the Experience Timeline:

Open src/data/timeline.ts.

Follow the TimelineEntry interface to add your career or education history.

Adding Certifications

To update the Certifications section:

Open src/data/certifications.ts.

Follow the Certification interface. You can add any icon from the react-icons library.

🧪 Running Tests

Unit Tests

Unit tests are run using Jest and React Testing Library.

pnpm test


End-to-End (E2E) Tests

E2E tests are run using Playwright.

# First, make sure your dev server is running
pnpm dev

# Run E2E tests in a separate terminal
pnpm test:e2e


🌐 Deployment

This project is optimized for deployment on Vercel.

Push your code to a GitHub repository.

Import the repository into your Vercel dashboard.

Vercel will automatically detect the Next.js framework.

Important: You must add your NEXT_PUBLIC_GITHUB_USERNAME and (optional) GITHUB_TOKEN as Environment Variables in the Vercel project settings.

Deploy!

GitHub Activity

Requires env: NEXT_PUBLIC_GITHUB_USERNAME

Optional: GITHUB_TOKEN (to increase rate limit)

API route: /api/github (cached 10 minutes via fetch(..., next: { revalidate: 600 }))