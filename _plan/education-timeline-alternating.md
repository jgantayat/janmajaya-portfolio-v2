# Plan: Education — add 10th & 12th + alternating centre-line timeline

## Context

The education section currently shows one entry (B.Tech 2018-2022) in a left-aligned vertical timeline (same component as Experience). The user wants to add Secondary (10th, 2016) and Higher Secondary (12th, 2016-2018) entries and display all three in a **centre-spine alternating zig-zag** layout: cards alternate left / right of a central vertical line, with a dot on the line for each entry. The reference image shows the layout concept — the theme, colours, card style, and typography must stay identical to the existing site.

**Key constraint:** `TimelineItemComponent` is shared with the Experience section. Its layout is left-only (`grid-template-columns: 24px 1fr`). Changing it would break Experience. So the education section will render its cards **inline** (not via `TimelineItemComponent`) and control the alternating layout entirely within `education.component.*`. `TimelineItemComponent` is unchanged and unimported in the education component after this change.

## Data — 3 entries in chronological order

Add 2 new entries **before** the existing B.Tech entry in `portfolio.data.ts`:

```ts
export const education: EducationItem[] = [
  {
    degree: 'Secondary School Certificate',
    field: '10th Grade',
    institution: 'Maharishi Vidya Mandir',
    period: '2016',
    location: 'Balasore, Odisha',
    description: '',
    score: 'CGPA: 10 / 10',
    tags: ['10th Grade', 'CGPA 10'],
  },
  {
    degree: 'Higher Secondary Certificate',
    field: 'Science (12th Grade)',
    institution: 'Royal College of Science and Technology',
    period: '2016 – 2018',
    location: 'Bhubaneswar, Odisha',
    description: '',
    score: '79.67%',
    tags: ['12th Grade', 'Science Stream'],
  },
  {
    // existing B.Tech entry — unchanged
    degree: 'Bachelor of Technology',
    field: 'Electrical Engineering',
    ...
  },
];
```

## Layout design

```
Desktop ≥ 768px (alternating):

     [10th card LEFT]  ───●───  [empty RIGHT]          index 0 (left)
     [empty LEFT]      ───●───  [12th card RIGHT]       index 1 (right)
     [B.Tech card LEFT]───●───  [empty RIGHT]           index 2 (left)

          ↑                ↑
       content col      centre-spine
```

```
Mobile < 768px (collapses to single column):

  ●  10th card
  │
  ●  12th card
  │
  ●  B.Tech card
```

## Files changed

| File | Change |
|---|---|
| `src/app/data/portfolio.data.ts` | Prepend 2 new entries to `education[]` |
| `src/app/sections/education/education.component.html` | Replace `app-timeline-item` with inline alternating markup |
| `src/app/sections/education/education.component.css` | Full rewrite from `max-width: 800px` to alternating timeline |
| `src/app/sections/education/education.component.ts` | Swap `TimelineItemComponent` → `TagComponent` in imports |

## HTML (`education.component.html`)

```html
<section id="education" class="section">
  <div class="container">
    <div appRevealOnScroll>
      <app-section-title
        title="Education"
        label="04. education"
        subtitle="The foundation that got me here."
      />
    </div>

    <div class="edu-timeline">
      @for (item of edu; track item.institution; let i = $index) {
        <div
          class="edu-row"
          [class.edu-right]="i % 2 !== 0"
          appRevealOnScroll
          [revealDelay]="i * 120"
        >
          <div class="edu-card-slot">
            <article class="edu-card card">
              <div class="edu-card-header">
                <div>
                  <h3 class="edu-degree">{{ item.degree }}</h3>
                  <span class="edu-field">{{ item.field }}</span>
                  <span class="edu-org">{{ item.institution }}</span>
                </div>
                <div class="edu-info">
                  <span class="edu-period mono">{{ item.period }}</span>
                  <span class="edu-location">{{ item.location }}</span>
                </div>
              </div>
              @if (item.description) {
                <p class="edu-description">{{ item.description }}</p>
              }
              @if (item.score) {
                <span class="score-badge mono">{{ item.score }}</span>
              }
              @if (item.tags.length) {
                <div class="edu-tags">
                  @for (tag of item.tags; track tag) {
                    <app-tag [label]="tag" />
                  }
                </div>
              }
            </article>
          </div>

          <div class="edu-dot-col">
            <div class="edu-dot"></div>
          </div>

          <div class="edu-spacer"></div>
        </div>
      }
    </div>
  </div>
</section>
```

## CSS (`education.component.css`) — full replacement

```css
/* Centre-line spine */
.edu-timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.edu-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 20px;
  bottom: 20px;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(to bottom, var(--color-accent), var(--color-border));
  z-index: 0;
}

/* Row: 3-column grid [left-content] [centre-dot] [right-content] */
.edu-row {
  display: grid;
  grid-template-columns: 1fr 48px 1fr;
  grid-template-areas: "card dot empty";
  align-items: start;
  margin-bottom: var(--space-10);
}

/* Flip: card moves to right column */
.edu-right {
  grid-template-areas: "empty dot card";
}

.edu-card-slot { grid-area: card; }
.edu-dot-col   { grid-area: dot;   display: flex; flex-direction: column; align-items: center; padding-top: var(--space-5); z-index: 1; }
.edu-spacer    { grid-area: empty; }

/* Dot */
.edu-dot {
  width: 20px;
  height: 20px;
  background: var(--color-accent);
  border: 3px solid var(--color-bg-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--color-accent);
  flex-shrink: 0;
}

/* Card — same look as existing timeline-content */
.edu-card {
  padding: var(--space-5) var(--space-6);
}

.edu-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-bottom: var(--space-3);
}

.edu-degree {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.edu-field {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  display: block;
  margin-top: 2px;
}

.edu-org {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-accent);
  display: block;
  margin-top: var(--space-1);
}

.edu-info { text-align: right; }

.edu-period {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-accent);
  display: block;
}

.edu-location {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  display: block;
  margin-top: var(--space-1);
}

.edu-description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-4);
}

/* Reuse existing score-badge styles (same tokens) */
.score-badge {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--color-accent-dim);
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 600;
  margin-bottom: var(--space-3);
}

.edu-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-3);
}

/* Mobile: collapse to single left-aligned column */
@media (max-width: 768px) {
  .edu-timeline::before { left: 10px; transform: none; }

  .edu-row,
  .edu-right {
    grid-template-columns: 20px 1fr;
    grid-template-areas: "dot card";
    margin-bottom: var(--space-8);
  }

  .edu-spacer    { display: none; }
  .edu-dot-col   { padding-top: var(--space-5); align-items: flex-start; }
  .edu-info      { text-align: left; }
}
```

## TS (`education.component.ts`) — swap imports

```ts
// Remove:  TimelineItemComponent
// Add:     TagComponent
import { TagComponent } from '../../shared/components/tag/tag.component';

// imports array in @Component:
imports: [SectionTitleComponent, TagComponent, RevealOnScrollDirective],
```

## Verification

1. `npm run build` — clean, no diagnostics, within budget
2. `npm start`, navigate to Education section:
   - 3 entries visible: 10th (left), 12th (right), B.Tech (left)
   - Centre vertical line (accent → grey gradient) connects all dots
   - Each dot is accent-coloured on the spine
   - Cards use existing `.card` class (same dark card style as everywhere else)
   - Score badges and tags render as usual
   - Resize ≤768px: collapses to left-aligned single column, spine moves to far left
3. Experience section — unchanged (still uses `TimelineItemComponent`, left-aligned)
