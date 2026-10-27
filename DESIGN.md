# Design System --- Arya.dev Portfolio

## 1. Design intent

**Direction:** Editorial Brutalism × Modern Developer Portfolio.

Use the supplied Ailene screenshots as visual inspiration, not as a
template to copy exactly. Create an original developer identity through
content, composition, typography, and project presentation.

The site should feel: - Bold but orderly - Minimal but not empty -
Interactive without distracting from content - Professional with a
distinctive visual personality - Cohesive across dark and light sections

## 2. Color tokens

  Token          Hex         Intended use
  -------------- ----------- ----------------------------------------
  Forest Green   `#102A21`   Hero, contact, footer, dark surfaces
  Neon Lime      `#D4F52B`   Highlights, primary CTA, active states
  Off-White      `#F3F5ED`   Light sections and page surfaces
  Near Black     `#111713`   Text, outlines, dark details
  Muted Green    `#C5D4CA`   Secondary text on dark surfaces
  Soft Border    `#D6DDD6`   Dividers and subtle borders
  White          `#FFFFFF`   Cards and contrast surfaces

Use CSS variables or the project's Tailwind theme configuration for
shared tokens. Lime is an accent, not a page-wide background by default.
Ensure text/background combinations remain readable.

## 3. Typography

Use a modern sans-serif family with a strong display weight, such as
Geist Sans or a comparable available font.

-   Display headings: bold/heavy, tight line-height, responsive sizing.
-   Body text: comfortable line-height and readable measure.
-   Eyebrows and metadata: small, concise, optionally uppercase.
-   Highlight key phrases with lime surfaces and near-black text.
-   Prefer responsive type sizing with `clamp()`.
-   Limit the site to one primary sans-serif family and, only if
    justified, one secondary family.

Do not sacrifice readability to match a screenshot's exact scale.

## 4. Layout and spacing

-   Main content max-width: approximately 1200--1320 px.
-   Use consistent spacing tokens.
-   Use CSS Grid for desktop compositions and simpler stacks on mobile.
-   Leave generous whitespace between major sections.
-   Avoid filling every empty space with decoration.
-   Use responsive containers and prevent horizontal overflow.

Suggested page rhythm:

1.  Dark hero
2.  Light project showcase
3.  Light or subtly varied About section
4.  Light skills and experience sections
5.  Dark contact and footer

Sections may vary in composition, but the whole page must feel cohesive.

## 5. Cards and surfaces

Core card styling: - Strong near-black outline, generally 1--2 px. -
White, off-white, or lime surface depending on context. - Medium corner
radius, approximately 12--20 px. - Small offset shadow, approximately
4--7 px. - Subtle hover lift and shadow transition.

Avoid excessive glassmorphism, excessive gradients, and too many
competing card styles.

Project cards should prioritize: 1. Project preview 2. Project title and
category 3. Problem/solution summary 4. Developer's contribution 5.
Technology tags 6. Valid repository/demo links

Keep card heights and spacing visually balanced without forcing awkward
fixed heights.

## 6. Hero composition

The hero is the primary visual signature.

Required content: - Developer role/eyebrow - Clear headline - Short
supporting paragraph - Primary CTA to projects - Secondary CTA to
contact or About

Suggested headline: \> I build digital products that solve real
problems.

Suggested highlighted phrase: \> From idea to deployment.

Suggested supporting copy: \> I develop web applications by combining
thoughtful interfaces, reliable backend systems, and practical
engineering.

These are editable starter copy, not mandatory final wording.

Visual details: - Forest-green background. - Fine, low-opacity grid. -
Large typography with selected lime highlight. - Optional floating cards
for frontend, backend, database, and deployment. - Optional dotted
connector lines between decorative cards. - Maintain enough contrast and
whitespace around the headline.

Floating cards are decorative. On narrow screens, simplify or remove
them rather than crowding the main message.

## 7. Section guidance

### Navbar

-   Simple brand mark/name on the left.
-   Main navigation on desktop.
-   One clear CTA.
-   Accessible mobile menu on smaller screens.
-   Keep links readable across dark and light backgrounds.

### Projects

-   Use a light background.
-   Give project previews visual prominence.
-   Use consistent border, shadow, and tag styles.
-   Show only accurate project information.
-   Hide repository/demo actions if their URLs are unavailable.

### About

-   Use an editorial layout with a strong heading and concise copy.
-   Avoid long walls of text.
-   Use optional visual callouts only if they reinforce the story.

### Skills

-   Group technologies by category, such as Frontend, Backend, Database,
    and Tools.
-   Use icons when useful, but ensure labels remain visible.
-   Avoid arbitrary percentage-based skill bars.

### Experience / Journey

-   Use a readable timeline or stacked list.
-   Include dates, roles, contributions, and technologies only when
    verified.
-   If formal work experience is limited, label the section "My Journey"
    rather than inventing employment.

### Contact

-   Return to a dark surface for a strong closing section.
-   Use a clear invitation to collaborate.
-   Include only valid email and social links.
-   Use a high-contrast CTA.

### Footer

-   Keep it concise.
-   Include brand, copyright year, useful links, and back-to-top
    behavior.
-   Avoid placeholder links that look functional.

## 8. Motion and interaction

Use motion selectively to reinforce hierarchy.

### Scroll reveal

-   Fade-up or small vertical reveal for headings and cards.
-   Stagger cards lightly.
-   Trigger when entering the viewport.
-   Never leave content hidden if animation initialization fails.

### Hover

-   Small card lift.
-   Subtle shadow or border change.
-   Small arrow movement on CTA buttons.
-   Short, natural transitions.

### Floating elements

-   Small vertical movement with different timings.
-   Avoid excessive rotation or large movement.
-   Ensure decorative cards never cover important copy or controls.

### Reduced motion

Respect `prefers-reduced-motion: reduce`: - Disable or reduce floating
motion. - Minimize scroll reveal transitions. - Avoid forced smooth
scrolling. - Keep all information and controls available.

Prefer animation of `transform` and `opacity`; avoid continuous
layout-changing animations.

## 9. Responsive behavior

Test at minimum: - 320--375 px mobile - 390--430 px mobile - 768 px
tablet - 1024--1440 px laptop/desktop - 1440 px and wider desktop

Rules: - No horizontal overflow. - Headings wrap naturally and remain
readable. - Hero changes to a single-column layout when necessary. -
Floating cards may be simplified on mobile. - Project cards adapt to one
column on narrow screens. - Navigation changes to a mobile menu at an
appropriate breakpoint. - Buttons remain easy to tap. - No important
content relies only on hover.

## 10. Accessibility

-   Use semantic landmarks and heading order.
-   Ensure keyboard access to all interactive elements.
-   Provide visible focus states.
-   Maintain readable contrast.
-   Use useful alt text for meaningful images.
-   Mark purely decorative elements as hidden from assistive technology
    where appropriate.
-   Provide accessible names for icon-only buttons.
-   Do not convey status through color alone.

Aim for WCAG 2.2 AA where applicable.

## 11. Image and asset guidance

-   Use genuine screenshots of the owner's projects where available.
-   Never present another developer's work as the owner's work.
-   Preserve image aspect ratios.
-   Optimize images and use Next.js image optimization where
    appropriate.
-   Use CSS or lightweight SVG for grid lines and simple decorative
    connectors.
-   Avoid large autoplay videos and heavy visual assets unless there is
    a clear reason.

## 12. Quality checklist

-   [ ] The design feels inspired by, but not copied from, Ailene.
-   [ ] Dark and light sections have a deliberate rhythm.
-   [ ] Lime accents are used consistently.
-   [ ] Typography has clear hierarchy.
-   [ ] Card borders and offset shadows are consistent.
-   [ ] Hero headline remains the primary focus.
-   [ ] Floating cards do not obstruct content.
-   [ ] Mobile layout is clean and readable.
-   [ ] Reduced-motion preferences are respected.
-   [ ] All visual interactions remain usable with keyboard and touch.
