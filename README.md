# Arya.dev --- Personal Portfolio

Personal portfolio website for a Full-Stack Developer, inspired by the
visual direction of Ailene while maintaining an original identity and
content.

## Project overview

The website introduces the developer, showcases selected projects,
explains technical skills and experience, and provides clear contact
links. The visual direction combines editorial typography, bold card
outlines, offset shadows, subtle grid backgrounds, lime accents, and a
hybrid dark/light layout.

## Intended stack

-   Next.js with App Router
-   TypeScript
-   Tailwind CSS
-   Motion for React, where animation is useful
-   Lucide React for icons

Use stable, compatible package versions at implementation time. Do not
add a backend or database unless a real requirement emerges.

## Main sections

1.  Navbar
2.  Hero
3.  Selected Projects
4.  About Me
5.  Technical Skills
6.  Experience / Journey
7.  Contact
8.  Footer

## Getting started

Prerequisites: - A supported Node.js LTS version - npm (or the package
manager already used by the repository)

Install dependencies:

``` bash
npm install
```

Start the development server:

``` bash
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

Run the scripts that exist in `package.json`. At minimum, the
implementation should support:

``` bash
npm run lint
npx tsc --noEmit
npm run build
```

If a script is not configured, either add it appropriately or report
that it was unavailable. Do not report a check as passing unless it was
actually run.

## Content to customize before launch

-   Display name / brand
-   Headline and About description
-   Project descriptions, roles, screenshots, repository links, and live
    demos
-   Verified skills and experience
-   Email address and social links
-   SEO metadata, domain, and Open Graph image

Use clearly labeled placeholders for missing information. Never invent
work history, testimonials, metrics, clients, or project outcomes.

## Design direction

See [`DESIGN.md`](./DESIGN.md) for the visual system and interaction
guidance.

## Instructions for coding agents

See [`AGENTS.md`](./AGENTS.md) for implementation rules, quality gates,
and required final reporting.

## Deployment

The site can be deployed to Vercel or another compatible Next.js hosting
platform. Configure the production domain and metadata only when the
actual values are known. After deployment, smoke-test navigation,
responsive layouts, external links, images, and metadata on the public
URL.
