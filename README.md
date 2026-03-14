# Travel & Tourism Landing Page - React, Vite, TypeScript, TailwindCSS, Framer Motion Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-blue?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF)](https://www.framer.com/motion/)

A modern, responsive travel and tourism landing page built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. This project is designed as both a learning resource and a practical template: it demonstrates reusable components, Context API, custom hooks, type-safe props, and animated UI. Use it to discover featured tours, explore the codebase, or extend it for your own travel/tourism site.

- **Live Demo:** [https://travel-backroads.vercel.app/](https://travel-backroads.vercel.app/)

![Image 1](https://github.com/user-attachments/assets/00e0019b-c97f-49e2-ab30-e27eae581319)
![Image 2](https://github.com/user-attachments/assets/a0f718c6-2f1a-418a-a9dd-fb8d52a87c1e)
![Image 3](https://github.com/user-attachments/assets/512d2130-bc37-4d9a-81e6-2206ff744941)
![Image 4](https://github.com/user-attachments/assets/d06097ec-5de8-4121-aa4f-edbc66d3b99b)

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Setup & Installation](#setup--installation)
6. [Environment Variables](#environment-variables)
7. [How to Run & Use](#how-to-run--use)
8. [Walkthrough & Functionality](#walkthrough--functionality)
9. [Components & Reusability](#components--reusability)
10. [Data, API & Backend](#data-api--backend)
11. [Routes & Navigation](#routes--navigation)
12. [Libraries & Dependencies](#libraries--dependencies)
13. [Keywords & Learning Outcomes](#keywords--learning-outcomes)
14. [Deployment](#deployment)
15. [Conclusion](#conclusion)
16. [License](#license)

---

## Project Overview

**Backroads** is a single-page application (SPA) that simulates a travel and tour company landing page. It is built for **beginner-to-intermediate** learners to practice React patterns: functional components, hooks, Context API, TypeScript interfaces, and utility-first CSS with Tailwind. The app has no backend; all content is driven by local data in `src/data.ts`, making it easy to run locally and customize. The UI includes a hero with streaming keywords, an educational tips banner, about section, services grid, featured tour cards with Lucide icons and slogan badges, a “how this app is built” concepts section, and a footer with social links.

---

## Features

- **Responsive layout** — Mobile-first design with Tailwind breakpoints (sm, md, lg, xl).
- **Animated sections** — Framer Motion for fade-in, slide-in from left/right/bottom, and staggered children.
- **Hero typewriter** — Cycling streaming keywords (Explore, Get Lost, Wander, etc.) with a blinking cursor.
- **Educational banner** — Auto-cycling learning tips (Components, Context API, Hooks, TypeScript) with type-in and type-out effect.
- **Featured tours** — Six tour cards with images, date badge, slogan badge (streaming text), location/cost/duration pills and Lucide icons (MapPin, Calendar, Banknote, Clock, Sparkles).
- **Reusable building blocks** — Title, PageLinks, PageLink, SocialLink, Service, Tour used in Navbar, Footer, and sections.
- **Context API** — `AppContext` provides learning tips and current tip index to `EducationalBanner` without prop drilling.
- **Custom hooks** — `useCyclingStreamingWords`, `useTypewriterStream`, `useStreamingText`, `useInView` for animations and streaming text.
- **TypeScript** — Typed props and data (`TourItem`, `ServiceItem`, `PageLinkItem`, etc.) in `src/types/index.ts`.
- **Fixed navbar** — Sticky nav with mobile hamburger menu and smooth scroll to sections.
- **SEO metadata** — Title, description, author, keywords, Open Graph and Twitter card meta tags in `index.html`.
- **Lint & build** — ESLint (TypeScript + React) and production build via Vite.

---

## Technology Stack

| Technology                     | Purpose                      |
| ------------------------------ | ---------------------------- |
| **React 18**                   | UI components and hooks      |
| **Vite 6**                     | Build tool and dev server    |
| **TypeScript 5.6**             | Type-safe props and data     |
| **Tailwind CSS 3.4**           | Utility-first styling        |
| **Framer Motion 11**           | Declarative animations       |
| **Lucide React**               | Icons on tour cards (badges) |
| **Font Awesome** (CDN)         | Nav/footer and service icons |
| **ESLint + typescript-eslint** | Linting and code quality     |

---

## Project Structure

```bash
02-backroads-react/
├── index.html              # Entry HTML, SEO meta tags, font/icon links
├── package.json            # Scripts, dependencies
├── vite.config.ts          # Vite + React plugin
├── tsconfig.json           # TypeScript compiler options
├── tailwind.config.js      # Tailwind theme (colors, font)
├── postcss.config.js       # PostCSS (Tailwind, autoprefixer)
├── eslint.config.js        # ESLint flat config (TypeScript, React)
├── vercel.json             # SPA rewrites for Vercel deployment
├── public/
│   ├── vite.svg            # Favicon
│   └── images/             # main.jpeg, about.jpeg, logo.svg, tour-1..6.jpeg
├── src/
│   ├── main.tsx            # React root, mounts App
│   ├── App.tsx             # AppProvider + section order (Navbar → Hero → … → Footer)
│   ├── index.css           # Tailwind directives + base styles
│   ├── vite-env.d.ts       # Vite client types
│   ├── data.ts             # learningTips, pageLinks, socialLinks, services, tours
│   ├── types/
│   │   └── index.ts        # PageLinkItem, SocialLinkItem, ServiceItem, TourItem, LearningTip
│   ├── context/
│   │   └── AppContext.tsx  # AppProvider, useApp, tip state for EducationalBanner
│   ├── hooks/
│   │   ├── useCyclingStreamingWords.ts  # Hero: cycle words with type-in/out
│   │   ├── useTypewriterStream.ts       # EducationalBanner: type then reverse
│   │   ├── useStreamingText.ts          # Tour slogan badge streaming
│   │   └── useInView.ts                 # KeyConceptsSection: scroll visibility
│   └── components/
│       ├── Navbar.tsx      # Logo “Back Roads”, nav links, social icons, mobile toggle
│       ├── Hero.tsx        # Hero text + streaming keywords
│       ├── EducationalBanner.tsx  # Learning tips (Context) + typewriter
│       ├── About.tsx       # About section with image and copy
│       ├── Services.tsx    # Section + grid of Service
│       ├── Service.tsx      # Single service card (icon, title, text)
│       ├── Tours.tsx        # Section + grid of Tour
│       ├── Tour.tsx        # Tour card (image, date, slogan, info, badges)
│       ├── KeyConceptsSection.tsx  # “How this app is built” cards
│       ├── Footer.tsx      # Page links, social links, copyright
│       ├── Title.tsx       # Section heading (title + subTitle span)
│       ├── PageLinks.tsx   # List of PageLink from pageLinks
│       ├── PageLink.tsx    # Single nav/footer link
│       └── SocialLink.tsx  # Social icon link (anchor only; parent wraps in <li>)
└── backroads-html/         # Optional vanilla HTML/JS version
```

---

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/arnobt78/Backroads--React-Landing-Page.git
   cd Backroads--React-Landing-Page
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app runs at **<http://localhost:5173>** (Vite default).

4. **Build for production**

   ```bash
   npm run build
   ```

   Output is in the `dist/` folder.

5. **Preview production build locally**

   ```bash
   npm run preview
   ```

6. **Run lint**

   ```bash
   npm run lint
   ```

---

## Environment Variables

**You do not need any environment variables to run this project.** It works out of the box with no `.env` file.

If you later add optional features (e.g. analytics, contact form backend), you can introduce a `.env` file and use Vite’s `import.meta.env`:

- Create `.env` in the project root (and add `.env` to `.gitignore` if it contains secrets).
- Example optional variables:
  - `VITE_APP_TITLE` — Override app title.
  - `VITE_API_URL` — Optional API base URL for future backend.
- In code: `import.meta.env.VITE_APP_TITLE`. Only variables prefixed with `VITE_` are exposed to the client.
- For Vercel: set the same variables in the project’s Environment Variables in the dashboard.

---

## How to Run & Use

- **Development:** `npm run dev` → open <http://localhost:5173>. Use the navbar to scroll to Home, About, Services, Tours; the hero shows streaming keywords; the educational banner cycles tips; tour cards show slogans and Lucide icon badges.
- **Production:** `npm run build` then `npm run preview` to test the built app locally.
- **Learning:** Open `src/App.tsx` to see the section order; `src/data.ts` for content; `src/components/*.tsx` for UI; `src/context/AppContext.tsx` and `src/hooks/*.ts` for state and effects.

---

## Walkthrough & Functionality

- **Navbar:** Fixed at top; “Back” + “Roads” text logo; nav links (home, about, services, tours) and social icons; on small screens a hamburger toggles the link list. Smooth scroll targets section IDs.
- **Hero:** Full-height block with background image (desktop) or solid color (mobile). Headline “backroads app” and a paragraph ending with “Let’s ” plus a **streaming keyword** (Explore, Get Lost, Wander, etc.) that types in, holds, then types out and cycles. CTA “explore tours” scrolls to `#tours`.
- **Educational banner:** Shows a rotating **learning tip** (title + description) with a typewriter effect (type in → hold → type out) and auto-advances to the next tip. Data and current index come from `AppContext`.
- **About:** Two-column layout (image + text) with short copy about handcrafted tours and expert guides. Image from `public/images/about.jpeg`.
- **Services:** Grid of three **service cards** (saving money, endless hiking, amazing comfort) with Font Awesome icons and short descriptions from `data.ts`.
- **Tours:** Grid of **six tour cards**. Each card: image, date badge (Calendar icon), optional **slogan badge** (streaming text + Sparkles), title, description, and pills for location (MapPin), cost (Banknote), duration (Clock). Data and images from `data.ts` and `public/images/tour-*.jpeg`.
- **Key concepts:** “How this app is built” — four cards (Reusable components, Context API, Custom hooks, Framer Motion) with short explanations. Uses `useInView` for scroll-triggered fade-in.
- **Footer:** Same nav links and social icons as the navbar, plus copyright. SocialLink is an `<a>`; Navbar/Footer wrap it in `<li>` for valid list markup.

---

## Components & Reusability

- **Title** — Accepts `title` and `subTitle`; use for any section heading. Example: `<Title title="featured" subTitle="tours" />`.
- **PageLinks + PageLink** — Renders `pageLinks` with a given `parentClass` and `itemClass`. Used in Navbar (with toggle) and Footer. Reuse in any nav or footer by passing classes.
- **SocialLink** — Renders a single social link (href, icon). Parent must wrap in `<li>`. Use in Navbar and Footer.
- **Service** — One service card: `icon`, `title`, `text`. Used inside `Services`; you can reuse the same shape for other service grids.
- **Tour** — One tour card: `image`, `date`, `title`, `info`, `location`, `duration`, `cost`, optional `slogan`. Uses Lucide icons and optional streaming slogan. Reuse by passing the same props from any tour list.
- **EducationalBanner** — Reads tips and current index from `useApp()`; no props. To reuse in another app, provide an `AppProvider` and the same (or different) tips in context.
- **KeyConceptsSection** — Static list of concept cards; you can replace the list or reuse the layout for other “feature” blocks.

**Using a component in another project:** Copy the component file and its dependencies (e.g. `Title`, `Tour`), ensure types from `src/types/index.ts` (or equivalent) and any hooks/context are available, and style with your own Tailwind or CSS.

---

## Data, API & Backend

- **No backend or API.** All content is in `src/data.ts`: `learningTips`, `pageLinks`, `socialLinks`, `services`, `tours`. Each tour has `id`, `image` (path in `public/images/`), `date`, `title`, `info`, `location`, `duration`, `cost`, and optional `slogan`.
- **Adding more tours or services:** Edit the arrays in `data.ts` and add images to `public/images/` if needed. Types in `src/types/index.ts` define the shapes.
- **Future API:** You could replace `data.ts` with `fetch()` or a data-fetching library and store results in state or context; the same component props (e.g. `TourItem`) can be filled from API responses.

---

## Routes & Navigation

- This is a **single-page application (SPA)**. There are no React Router routes; the app is one page.
- **Navigation** is by **hash links**: `#home`, `#about`, `#services`, `#tours`. Clicking nav links scrolls to the corresponding section. `vercel.json` rewrites all paths to `/index.html` so refreshes on any URL still load the SPA.

---

## Libraries & Dependencies

- **react** / **react-dom** — Core UI. Used for components, hooks, and Context.
- **framer-motion** — Declarative animations. Example: `<motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>`. Handles stagger, variants, and scroll-triggered animations.
- **lucide-react** — Icon components (e.g. `MapPin`, `Calendar`, `Clock`, `Banknote`, `Sparkles`) used in tour cards. Import and render: `<MapPin className="w-3.5 h-3.5" />`.
- **Tailwind CSS** — Utility classes for layout and styling. Config in `tailwind.config.js` extends theme (e.g. `primary`, `grey` color scales).
- **TypeScript** — Typed interfaces in `src/types/index.ts`; components and hooks use these for props and state.
- **Vite** — Dev server (HMR), production build, and static asset handling. Entry is `index.html` and `src/main.tsx`.
- **ESLint + typescript-eslint** — Lint script in `package.json` runs across `.ts` and `.tsx` files.

**Example: using Framer Motion in a new section**

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Your content
</motion.div>;
```

**Example: using a type from the project**

```tsx
import type { TourItem } from "./types";

const MyTourCard = ({ tour }: { tour: TourItem }) => (
  <div>
    {tour.title} — {tour.location}
  </div>
);
```

---

## Keywords & Learning Outcomes

- **Keywords:** Backroads, travel tours, tour landing page, React, Vite, TypeScript, Tailwind CSS, Framer Motion, SPA, Context API, custom hooks, Lucide, Font Awesome, responsive design, educational project.
- **Learning outcomes:** Structure a React app with functional components; use Context for shared state; build custom hooks for streaming text and scroll visibility; type components with TypeScript; style with Tailwind; animate with Framer Motion; consume local data and prepare for future API integration.

---

## Deployment

- **Vercel:** Connect the GitHub repo to Vercel. Build command: `npm run build`. Output directory: `dist`. Root directory: project root. `vercel.json` already contains SPA rewrites so refreshes work.
- **Other hosts:** Run `npm run build`, then serve the contents of `dist/` as static files and configure the server to serve `index.html` for all routes (SPA fallback).

---

## Conclusion

Backroads is a practical, educational React + Vite + TypeScript landing page that demonstrates reusable components, Context API, custom hooks, TypeScript types, Tailwind CSS, and Framer Motion. Use it as a template for travel/tourism sites, a learning reference, or a base to extend with APIs and more features. The modular structure and clear separation of data, types, and UI make it suitable for beginners and intermediate learners. Contributions and suggestions are welcome.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** — feel free to use, enhance, and extend it further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
