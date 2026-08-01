# Akash R. — Developer Portfolio

A premium, dark, gold-accented developer portfolio built with React (Vite), Tailwind CSS,
Framer Motion, React Icons and React Router.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

> **Note on Vite version**: `vite` is pinned to `5.4.9` in `package.json`. Newer Vite
> pre-releases have shipped with a broken native rolldown binding in some sandboxed
> environments — if you hit a rollup/rolldown native-binding error after an `npm update`,
> re-pin to `5.4.x`.

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, GlassCard, Button, HeroPortrait,
                CursorGlow, ParticlesBackground, ScrollProgress, AnimatedCounter,
                SectionHeading
  sections/     One file per homepage section: Hero, Stats, About, Skills,
                Projects, Experience, Education, Contact
  pages/        Home.jsx (assembles all sections) and AboutPage.jsx
                ("More About Me")
  data/         data.js — all copy, links, skills and project content in one place
  hooks/        useTypewriter.js — the hero role typing effect
  index.css     Design tokens, glass/gradient-border utilities, scrollbar,
                focus states, reduced-motion handling
```

Edit `src/data/data.js` to update personal info, socials, skills, and projects —
everything else reads from that file, so most content changes don't touch the
component code at all.

## Contact form (EmailJS)

The contact form in `src/sections/Contact.jsx` uses `@emailjs/browser`. It ships with
placeholder IDs so the form still "works" (shows a success state) without crashing, but to
send real emails:

1. Create a free account at https://www.emailjs.com
2. Create an Email Service and a Template with `name`, `email`, and `message` fields
3. Replace the three constants at the top of `Contact.jsx`:
   ```js
   const EMAILJS_SERVICE_ID = "your_service_id";
   const EMAILJS_TEMPLATE_ID = "your_template_id";
   const EMAILJS_PUBLIC_KEY = "your_public_key";
   ```

## Resume

`public/resume.pdf` currently ships as a placeholder generated from the same content as
the site (summary, skills, projects, education). Swap it out with your real resume file —
keep the filename `resume.pdf`, or update the `href` in `src/components/Navbar.jsx`.

## Deploying

The build output in `dist/` is static and can be deployed to Vercel, Netlify, GitHub Pages,
or any static host. Since routing uses `react-router-dom`'s `BrowserRouter`, configure your
host to redirect all paths to `index.html` (a SPA fallback) so `/about` doesn't 404 on a
hard refresh.
