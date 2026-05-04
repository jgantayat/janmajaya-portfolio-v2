# Plan: Add MSG Global Solutions to experience timeline

## Context

The user has changed jobs:
- **Cognizant** — was Jul 2022 → Present; now Jul 2022 → **Mar 2026** (no longer current)
- **MSG Global Solutions** — new role, **Mar 2026 → Present**, Associate Consultant / Full-Stack Web Developer

Layout, design, and component code stay untouched. This is a pure data update in `src/app/data/portfolio.data.ts`. The `experience` array is rendered top-to-bottom by `experience.component.html`, so chronological order in the array = display order. Most recent goes first per resume convention.

## File to modify

| File | Change |
|---|---|
| `src/app/data/portfolio.data.ts` | Edit the `experience` array — insert new MSG entry at index 0, update Cognizant period + `isCurrent` |

## Changes

### 1. Insert new MSG Global entry at the top of the array

```ts
{
  title: 'Associate Consultant — Full-Stack Web Developer',
  organisation: 'MSG Global Solutions',
  period: 'Mar 2026 – Present',
  location: 'Bengaluru, Karnataka, India',
  description:
    'Building modern, scalable full-stack web applications using Java, Spring Boot, Angular, and TypeScript. Designing responsive UIs and performant backend services as part of the global delivery team.',
  tags: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Full Stack', 'REST API', 'Microservices'],
  isCurrent: true,
},
```

### 2. Update Cognizant entry (now second)

- `period: 'Jul 2022 – Present'` → `'Jul 2022 – Mar 2026'`
- `isCurrent: true` → `isCurrent: false`
- Keep `title`, `description`, `tags`, `location` unchanged (per user's "without changing content")

## Assumptions to confirm

These were inferred — easy to tweak after seeing them rendered:

- **Location:** `Bengaluru, Karnataka, India` (same as your profile location). If MSG Global puts you elsewhere, swap it.
- **Description text:** kept short and neutral, focused on what you stated (full-stack web development, Java/Spring/Angular). You can replace with the actual project / domain blurb whenever convenient.
- **Tags:** carried over your existing tech stack — feel free to add/remove based on the actual stack at MSG Global.
- **Title format:** `Associate Consultant — Full-Stack Web Developer` to capture both the org's title and the role you described. Could also be just `Associate Consultant` if the company prefers that label.

## What does NOT change

- `experience.component.{ts,html,css}` — untouched
- `timeline-item.component.{ts,html,css}` — untouched
- The visual look (timeline dot pulse for the current role, card layout, tag chips, period mono font) all carry over because we just feed the new entry the same shape of data
- `personalInfo.title: 'Java Full Stack Developer'` — leaving as-is since it still matches the new role; tell me if you want it relabelled

## Verification

1. `npm run build` — clean build, no type errors
2. `npm start` → scroll to Experience:
   - **MSG Global Solutions** card appears first with the pulsing accent dot (current role)
   - **Cognizant** card appears second, no pulse, period shows `Jul 2022 – Mar 2026`
   - Both cards use the existing timeline layout — no visual regression
   - Tags render with the same `app-tag` chip style as before

## Out of scope

- Restyling the timeline component
- Adding multi-bullet job descriptions (current model is a single `description` string)
- Updating resume PDF or LinkedIn URL — those are user-side actions
