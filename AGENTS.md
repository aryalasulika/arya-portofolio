# Instructions for Coding Agents

## Mission

Implement and maintain the Arya.dev personal portfolio according to the
product requirements in this repository and the visual system in
[`DESIGN.md`](./DESIGN.md). Build a functional, responsive website---not
just a static mockup.

## Before changing code

1.  Read `README.md`, `DESIGN.md`, and the existing project files.
2.  Inspect the current repository structure, package manager, scripts,
    and dependencies.
3.  Preserve useful existing work. Avoid replacing files wholesale
    unless there is a clear reason.
4.  Identify missing personal content and use explicit placeholders
    rather than inventing details.

## Required stack

-   Next.js App Router
-   TypeScript with strict type checking
-   Tailwind CSS
-   Motion for React only where it adds value
-   Lucide React for icons, if needed

Use compatible stable versions. Follow the conventions already
established in the repository where reasonable.

## Architecture rules

-   Prefer React Server Components by default.
-   Use Client Components only when state, event handlers, browser APIs,
    or client-side animation require them.
-   Keep project, skill, and experience content in data/configuration
    files where practical.
-   Build reusable components for navigation, buttons, section headings,
    project cards, and other repeated UI.
-   Use semantic HTML and accessible interaction patterns.
-   Keep dependencies lean. Do not add a backend, database,
    authentication, CMS, or analytics service without a documented need.
-   Do not add empty files or abstractions that do not serve a real
    purpose.

Suggested organization, adaptable to the existing repository:

``` text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   └── motion/
├── data/
└── lib/
```

## Product requirements

The page should include:

1.  Responsive navbar with working anchor links and mobile menu.
2.  Hero section with a clear developer headline, calls to action,
    subtle grid background, and optional floating decorative cards.
3.  Selected projects with accurate descriptions, technologies, roles,
    and valid links.
4.  About section.
5.  Grouped technical skills.
6.  Experience or development journey.
7.  Contact section with valid email/social links.
8.  Footer with working navigation and back-to-top behavior.

Use the visual and behavior requirements in `DESIGN.md`.

## Content integrity

-   Do not fabricate personal information, employment, education,
    testimonials, clients, project metrics, or achievements.
-   Do not claim a project is complete, deployed, or publicly accessible
    unless that is known.
-   Do not imply mastery of technologies based only on their appearance
    in a suggested stack.
-   Do not display repository/demo buttons when their URLs are missing.
-   Clearly label any remaining placeholders for the site owner to
    replace.

## Motion and responsiveness

-   Prefer `transform` and `opacity` for animation.
-   Respect `prefers-reduced-motion`.
-   Ensure content remains visible if animation code fails or is
    disabled.
-   Do not make important information available only on hover.
-   Prevent horizontal overflow and ensure decorative elements do not
    obscure content.
-   Test mobile menu behavior and keyboard focus.

## Accessibility and SEO

-   Use semantic landmarks and a logical heading hierarchy.
-   Ensure all interactive elements are keyboard accessible.
-   Provide visible focus indicators.
-   Use appropriate image alt text.
-   Maintain readable contrast.
-   Add Next.js metadata, description, Open Graph metadata, and favicon
    when assets/details are available.
-   Do not invent a production domain or canonical URL.

## Context7 documentation research (required)

Use **Context7** as the primary documentation reference for the stack and libraries used in this project. Do this before implementing a feature that depends on framework/library APIs, and whenever an API, configuration option, or recommended practice may have changed.

### Required workflow

1. Identify the exact technology and version in the repository (`package.json`, lockfile, config files, or installed package metadata).
2. Use the available Context7 tools to resolve the library/package identifier when needed, then query the official, version-relevant documentation for the task.
3. Prefer documentation that matches the installed version. If the project is starting from scratch and the version is not chosen yet, consult current official documentation and select compatible stable versions.
4. Check the documentation for the exact API, configuration, and implementation pattern before coding. This applies at minimum to:
   - Next.js App Router and metadata/image conventions
   - React and React Server/Client Component behavior
   - TypeScript configuration and type checking
   - Tailwind CSS installation, configuration, and utility conventions
   - Motion for React APIs and reduced-motion support, if used
   - Lucide React APIs, if used
   - Any additional dependency introduced during implementation
5. Use Context7 findings to guide implementation; do not rely solely on model memory, old tutorials, or guessed APIs.
6. If Context7 documentation conflicts with the repository's installed version, follow the documentation for the installed version or explicitly document why a version upgrade is needed.
7. If Context7 is unavailable, a query fails, or the relevant documentation cannot be found, do not pretend it was consulted. Use the library's official documentation or existing repository conventions as a fallback, and report the limitation.
8. Do not add a dependency merely because an example uses it. Confirm that it is needed, compatible, and appropriate for this project.
9. After implementation, verify the result with linting, type checking, build checks, and tests that are available. Documentation lookup does not replace runtime verification.
10. In the final report, summarize the important Context7 documentation areas consulted, any version-specific decisions, and any unresolved documentation uncertainty. Do not claim successful Context7 research unless it actually occurred.

### Documentation-first decision rule

When uncertain about an API or configuration, pause before guessing: inspect the installed version, consult Context7, implement the documented approach, and validate it locally. Keep the implementation aligned with current official guidance without performing unnecessary dependency upgrades.

## Required verification

Run the checks available in the project and fix issues where possible:

``` bash
npm run lint
npx tsc --noEmit
npm run build
```

Also test: - Desktop and mobile layouts - Navigation and CTA links -
Project links - Contact links - Missing images - Browser console
errors - Reduced-motion behavior - Keyboard navigation

If a command cannot run because of missing dependencies, unavailable
network access, or missing scripts, report the exact limitation. Never
claim that tests, builds, or deployments succeeded unless verified.

## Definition of done

-   All P0 sections and interactions work.
-   No critical runtime errors remain.
-   No broken or misleading links are shown.
-   Responsive layouts work at common mobile, tablet, and desktop
    widths.
-   Lint, type-check, and production build pass, or any unresolved
    blocker is explicitly documented.
-   README contains accurate setup and run instructions.
-   Remaining placeholders and follow-up tasks are documented.

## Final report

After implementation, report:

1.  Features completed
2.  Important files and architecture
3.  Dependencies added or changed
4.  Actual lint/type-check/build results
5.  Local run instructions
6.  Deployment instructions
7.  Remaining placeholders
8.  Known issues and unmet acceptance criteria
