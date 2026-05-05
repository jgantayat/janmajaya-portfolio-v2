# Plan: Recommendations section — testimonial carousel

## Context

Add a brand-new "Recommendations" section to the portfolio displaying 8 LinkedIn recommendations the user has received. The visual reference (a "Testimonials" carousel) shows a single recommendation at a time with: a circular avatar inside a decorative accent blob on the left, the quote text with stylised big quote marks on the right, the author's name below the quote, round prev/next nav buttons on the card's left/right edges, and a dot pagination strip at the bottom. Per the user's instruction we **only borrow the layout** — colours, typography, spacing, and feel must match the existing dark "Coder's Dark" theme already used elsewhere on the site (no white card, no pink — accent stays `#FF6B35`).

Section will be inserted between **Certifications (06)** and **Contact**, so Contact's label number bumps from `07` to `08`.

## Source data (from prompt)

8 recommendations, each with: name, LinkedIn headline, date, relationship to author, full quote text, and a photo file already present in `src/assets/`.

**Photo files verified present** (filenames in `src/assets/`):
- `Bhushan_Borul.jpg`
- `Manish_Chouhan.jpg`
- `Nalni_Gupta.jpg`
- `Pratik_Mohanty.jpg`
- `Akansha_Pujari.jpg`
- `Swayam_Prabha_Satpathy.jpg`
- `Sayantan_Sinha.jpg`
- `Akash_Tiwari.jpg`

## Files affected

### New (3 files, single new section component)

| Path | Purpose |
|---|---|
| `src/app/sections/recommendations/recommendations.component.ts` | Standalone component, OnPush, signals for `activeIndex` + `viewChild` for the scroll track |
| `src/app/sections/recommendations/recommendations.component.html` | Section title + carousel markup (track, prev/next buttons, dot pagination) |
| `src/app/sections/recommendations/recommendations.component.css` | Carousel layout, accent blob, quote-mark glyphs, dot indicators |

### Modified (5 files)

| File | Change |
|---|---|
| `src/app/core/models/portfolio.model.ts` | Add `Recommendation` interface |
| `src/app/data/portfolio.data.ts` | Add `recommendations: Recommendation[]` export with 8 entries; insert `{ label: 'Recommendations', sectionId: 'recommendations' }` into `navLinks` between Certifications and Contact |
| `src/app/sections/contact/contact.component.html` | `label="07. contact"` → `label="08. contact"` |
| `src/app/layout/layout.component.html` | Add `<app-recommendations />` between `<app-certifications />` and `<app-contact />` |
| `src/app/layout/layout.component.ts` | Import `RecommendationsComponent`, add to `imports` array |

No changes to shared components — the section is self-contained.

## Data model

```ts
// portfolio.model.ts
export interface Recommendation {
  name: string;
  headline: string;       // LinkedIn role/headline line
  relationship: string;   // e.g. "worked with Janmajaya on the same team", "was Janmajaya's teacher"
  date: string;           // free-form, e.g. "April 14, 2026"
  text: string;           // full recommendation body
  imageUrl: string;       // assets/<file>.jpg
}
```

```ts
// portfolio.data.ts — shape (full content from the prompt; abridged here)
export const recommendations: Recommendation[] = [
  {
    name: 'Bhushan Borul',
    headline: 'Technical Lead at Cognizant Technology Services',
    relationship: 'worked with Janmajaya on the same team',
    date: 'April 14, 2026',
    text: 'I had the pleasure of working with Janmajaya for nearly a year on our healthcare project, where they excelled as a key contributor in developing Spring Boot microservices. ...',
    imageUrl: 'assets/Bhushan_Borul.jpg',
  },
  // ... 7 more in the order presented in the prompt:
  // Manish Chouhan, Nalni Gupta, Pratik Mohanty, Akansha Pujari,
  // Dr Swayam Prabha Satpathy, Dr Sayantan Sinha, Akash Tiwary
];
```

Order: same order as the prompt (most recent first → oldest last).

## Component design

### Behaviour

- **Single card visible at a time** at all breakpoints — matches the reference layout
- **Carousel mechanics:** `activeIndex = signal(0)` drives which slide is shown
  - Prev/next round buttons decrement/increment with wrap-around (last → first)
  - Dot pagination: 8 dots; clicking dot `i` sets `activeIndex.set(i)`
  - Optional native swipe via scroll-snap track (kept simple — see "Implementation note" below)
- **Slide transition:** fade + slight horizontal slide via CSS transition on `opacity` + `transform`. Achieved by using `@for (rec of recommendations; track rec.name; let i = $index)` and toggling `[class.active]="i === activeIndex()"` — only the active slide is visible (`opacity: 1`); siblings sit at `opacity: 0; pointer-events: none; position: absolute`.
- **Reveal on scroll:** wrap the whole card in `appRevealOnScroll` so the section fades in like every other section
- **No autoplay** — manual nav only (consistent with the Projects slider just shipped)

### Implementation note — stacked-grid approach (no scroll-snap, no absolute positioning)

The Projects slider uses scroll-snap because it shows multiple cards. Here, exactly one slide is visible, dot pagination is index-based, and we want a clean fade transition — none of which scroll-snap helps with.

**Stable card height (no flicker requirement):** All 8 slides share a single CSS Grid cell:

```css
.rec-viewport { display: grid; grid-template-areas: "stack"; }
.rec-slide    { grid-area: stack; opacity: 0; pointer-events: none; transition: opacity 0.35s; }
.rec-slide.active { opacity: 1; pointer-events: auto; }
```

CSS Grid sizes the cell to the **tallest** child even when children are visually hidden (`opacity: 0`). The viewport locks at the height required by the longest recommendation (Bhushan's, ~6 sentences). Switching to a short one (Akash's single sentence) leaves whitespace below the text — acceptable trade-off for a section that **never reflows or jumps** between slide changes.

This is intentionally chosen over (a) absolute positioning + manual `min-height` tuning (fragile magic numbers per breakpoint), (b) JS-measured max-height (extra layout pass on init), or (c) internal scroll on long quotes (visual noise). Grid auto-sizing handles all 3 breakpoints uniformly with no JS and no constants.

Touch swipe support can be added later via pointer events; not in scope for this plan.

### Layout (single recommendation card)

```
┌────────────────────────────────────────────────────────────────────┐
│                          Recommendations                           │  ← centered title
│                          07. recommendations                       │
│                                                                    │
│  ‹                                                              ›  │  ← prev/next round buttons (absolute, vertically centered)
│      ┌──────────────────────────────────────────────────────┐      │
│      │   ╭──────╮         „                                  │     │
│      │   │ photo│       Quote text rendered in --color-      │     │
│      │   │      │       text-secondary, line-height 1.7      │     │
│      │   ╰──────╯       Wraps naturally; long quotes grow    │     │
│      │       ◢          card height — no internal scroll.  „ │     │
│      │                                                        │     │
│      │                  Author Name (bold, primary)           │     │
│      │                  Headline · mono small muted           │     │
│      │                  Relationship · April 14, 2026         │     │
│      └──────────────────────────────────────────────────────┘      │
│                       •  •  •  ●  •  •  •  •                       │  ← 8 dots, active = accent + wider
└────────────────────────────────────────────────────────────────────┘
```

### Theme mapping — reference image element → our token

| Reference element | Our implementation |
|---|---|
| White card | `background: var(--color-bg-card)` (dark theme card) |
| Orange accent line above title | Reuse existing `app-section-title` (already has the accent treatment) — set `align="center"` |
| Pink/red blob behind avatar | Pseudo-element `::before` on `.rec-photo-wrap`, organic blob shape with `background: var(--color-accent)` at `opacity: 0.18` (mirrors the hero photo blob already in the codebase) |
| Big stylised quote glyphs (open + close) | Two absolutely-positioned `<span>` containing `"` (or `“` / `„`) at `font-size: 4rem`, `color: var(--color-accent)`, `opacity: 0.35` |
| Round prev/next nav buttons | Reuse the **exact** `.slider-nav` styling already in `projects.component.css` (44×44, `--color-bg-card`, accent on hover) — copy the rules into this section's CSS so the section stays self-contained |
| Active dot indicator (filled, larger) | `.dot.active` → `width: 28px` (vs `8px`), `background: var(--color-accent)`. Inactive dots: `var(--color-border)` |
| Bold author name | `font-weight: 700; color: var(--color-text-primary); font-size: var(--text-lg);` |

### Responsive

- **≥768px:** photo + text in a 2-column flex (photo `flex: 0 0 200px`, text fills the rest)
- **<768px:** stack — photo on top centered, text below; nav buttons stay (positioned at the card's vertical mid-edges); shrink dots gap

### Accessibility

- Carousel container: `role="region"`, `aria-roledescription="carousel"`, `aria-label="Professional recommendations"`
- Each slide: `role="group"`, `aria-roledescription="slide"`, `aria-label="<index> of 8: <name>"`
- Inactive slides have `aria-hidden="true"` and `inert` so screen readers and keyboard tabbing skip them
- Prev/next buttons: explicit `aria-label="Previous recommendation"` / `"Next recommendation"`
- Dots: each is a `<button>` with `aria-label="Go to recommendation <i>"` and `aria-current="true"` on the active one
- Keyboard: prev/next/dot buttons are natively focusable; visible focus ring via `:focus-visible` rule (matching Projects slider)

### Image handling

- Use `NgOptimizedImage` (`ngSrc`, fixed `width`/`height`, `loading="lazy"` except first card which gets `priority`)
- Photos are JPG (~headshot size) — render at 160×160 inside a circle (`border-radius: 50%; object-fit: cover`)
- `alt` = `<name> headshot`

## Section title

```html
<app-section-title
  title="Recommendations"
  label="07. recommendations"
  subtitle="Words from people I've worked with."
  align="center"
/>
```

`SectionTitleComponent` already supports `align: 'left' | 'center'` — no changes needed there.

## Verification

1. `npm run build` — clean build, bundle within budgets, no TS / template diagnostics
2. `npm start` and walk through:
   - Navbar: new "Recommendations" entry between Certifications and Contact, smooth-scrolls to the section
   - Section title centered with `07. recommendations` label
   - Card #1 (Bhushan Borul) renders with circular photo, accent blob behind, quote text, name + headline + date
   - Click ›: advances to card #2 (Manish), dot 2 becomes active, smooth fade transition
   - Click dot 5: jumps to Akansha Pujari with active dot moving to 5
   - Click ‹ from card #1: wraps to card #8 (Akash Tiwary)
   - **No-flicker check**: rapidly click between the longest (Bhushan, dot 1) and the shortest (Akash, dot 8) — the section's overall height MUST stay identical; the surrounding page must not shift
   - Resize to <768px: photo stacks above text, prev/next buttons remain reachable, dots remain visible
   - Tab order: nav arrows → active card content → dots; visible focus ring on each
   - Screen reader (VoiceOver/NVDA): announces "Slide 1 of 8: Bhushan Borul" when active
   - Each photo loads (Network tab: 8× 200 OK on `assets/<name>.jpg`)
3. Contact section title now shows `08. contact`

## Reuses (no duplication)

- `SectionTitleComponent` (existing — supports `align="center"`)
- `RevealOnScrollDirective` (existing — wraps the card root)
- `NgOptimizedImage` (already used in hero + certifications)
- `.slider-nav` style pattern (copied from `projects.component.css` — same tokens, same dimensions, same hover behaviour)

## Out of scope

- Touch swipe gestures (manual button/dot nav covers all input methods; can be added later)
- Autoplay / auto-rotation
- Sharing or copying individual recommendations
- "View on LinkedIn" deep links (the source prompt didn't include per-recommendation URLs)
- Filtering by relationship type

## Known assumptions (flag if wrong)

- **Order** of recommendations matches the order in the prompt (most recent first)
- **Numbering**: Recommendations becomes `07` and Contact becomes `08`
- **Single-card carousel** (not 2-up or 3-up) — taken from the reference image
- **Theme overrides reference colours** — card stays dark (`--color-bg-card`), accent stays orange, no pink/white surfaces
- **Card height locked at the longest recommendation** — grid auto-sizes the viewport to Bhushan's quote; shorter quotes (Akash, Nalni) show whitespace below the text rather than causing the section to shrink
- **No "View on LinkedIn" URL** per recommendation since none were provided
