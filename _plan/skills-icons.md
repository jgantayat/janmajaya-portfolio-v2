# Plan: Skills section — replace text tags with branded icon badges

## Context

The Skills section currently shows each skill as a plain text pill (`<app-tag label="Java" />`) inside category cards. The user wants every skill to render as a small branded icon + name badge, matching the visual style in the supplied reference (multi-color brand logos with the name underneath). The two-column category card layout stays exactly as it is — only the inner skill items change.

## Reference image (decoded)

- Each skill is a small dark tile
- A colored brand logo sits centered at the top
- The skill name is uppercase / bold below the logo
- Tiles are arranged in a row that wraps

We'll keep the overall category-card structure (header with category name + tile grid below). The new skill tiles slot in where `<app-tag>` is today.

---

## Approach

### Icon source

Use the **Devicon** project via the jsDelivr CDN. Devicon ships authentic multi-color brand SVGs for nearly every tech logo.

URL pattern: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/<key>/<key>-original.svg`

For skills with no brand (Microservices, REST API, Soft Skills, etc.) we fall back to a small monochrome accent-colored SVG (a generic "code", "user", "checkmark" etc. icon already in the codebase or inline).

No npm install. No build-step changes. If we want to vendor the SVGs locally later, we can drop them into `src/assets/skill-icons/` and switch the URL — same shape.

### Data model change

`SkillCategory.skills` becomes an array of objects instead of strings:

```ts
// src/app/core/models/portfolio.model.ts
export interface Skill {
  name: string;
  iconKey?: string;          // Devicon key, e.g. 'java', 'spring', 'docker'
  iconColor?: string;        // optional override (Devicon "plain" vs "original")
  fallbackPath?: string;     // SVG path used when no brand icon
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];           // was: string[]
}
```

`portfolio.data.ts` skill arrays get rewritten (one-time edit) — every existing string becomes `{ name, iconKey }`. Examples:

```ts
{ name: 'Java',         iconKey: 'java' },
{ name: 'Spring Boot',  iconKey: 'spring' },
{ name: 'Microservices', fallbackPath: '<existing category icon path>' },
{ name: 'AWS EC2',      iconKey: 'amazonwebservices' },
{ name: 'GitHub Copilot', iconKey: 'github' },
{ name: 'Agile / Scrum', fallbackPath: '<users icon path>' },
```

Mapping table (for the user's full skill list — confirmed devicon keys):

| Skill | Icon source |
|---|---|
| Java | `java` |
| Spring Boot | `spring` |
| Microservices | fallback (cube icon) |
| Apache Kafka | `apachekafka` |
| RabbitMQ | `rabbitmq` |
| REST API | fallback (network icon) |
| JWT / OAuth2 | `jwt` |
| Hibernate | `hibernate` |
| Apache Camel | `apachecamel` |
| Angular 15+ | `angularjs` |
| TypeScript | `typescript` |
| JavaScript | `javascript` |
| HTML5 | `html5` |
| CSS3 / SCSS | `css3` |
| AWS EC2 / S3 / Lambda | `amazonwebservices` |
| Git | `git` |
| GitHub Actions | `githubactions` |
| Jenkins | `jenkins` |
| JFrog | fallback (package icon) |
| SonarQube | `sonarqube` |
| Docker | `docker` |
| MySQL | `mysql` |
| SQL Scripting | fallback (database icon) |
| JPA / Hibernate | `hibernate` |
| Data Modelling | fallback (database icon) |
| GitHub Copilot | `github` |
| Amazon Q | `amazonwebservices` |
| Prompt Engineering | fallback (sparkle icon) |
| AI Agent Mode | fallback (sparkle icon) |
| Agile / Scrum | fallback (users icon) |
| Client Management | fallback (users icon) |
| Technical Documentation | fallback (document icon) |
| Problem-Solving | fallback (lightbulb icon) |
| PI Planning | fallback (calendar icon) |

If a Devicon key turns out to be wrong at build, we just swap to fallback.

### Component change

`<app-tag>` is currently used elsewhere too (timeline chips on Experience cards). Don't break that — leave `TagComponent` alone.

Create a new component:

```
src/app/shared/components/skill-badge/
  skill-badge.component.ts
  skill-badge.component.css
```

`skill-badge.component.ts` (inline template):

```ts
@Component({
  selector: 'app-skill-badge',
  template: `
    <div class="badge">
      @if (skill().iconKey) {
        <img
          class="badge-icon"
          [src]="iconUrl()"
          [alt]="skill().name + ' logo'"
          width="32" height="32"
          loading="lazy"
        />
      } @else {
        <svg class="badge-icon fallback" width="32" height="32"
             viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path [attr.d]="skill().fallbackPath ?? defaultPath"/>
        </svg>
      }
      <span class="badge-name">{{ skill().name }}</span>
    </div>
  `,
  styleUrl: './skill-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillBadgeComponent {
  readonly skill = input.required<Skill>();
  protected readonly defaultPath =
    'M9 12l2 2 4-4'; // checkmark fallback
  protected iconUrl = computed(
    () => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${this.skill().iconKey}/${this.skill().iconKey}-original.svg`
  );
}
```

`skill-badge.component.css`:

```css
.badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  width: 88px;
  padding: var(--space-3) var(--space-2);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast),
              transform var(--transition-fast),
              box-shadow var(--transition-fast);
}

.badge:hover {
  border-color: var(--color-accent);
  transform: translateY(-3px);
  box-shadow: 0 6px 18px var(--color-shadow-accent);
}

.badge-icon { width: 32px; height: 32px; object-fit: contain; }
.badge-icon.fallback { color: var(--color-accent); }

.badge-name {
  font-size: var(--text-xs);
  font-weight: 600;
  text-align: center;
  color: var(--color-text-secondary);
  letter-spacing: 0.02em;
  line-height: 1.2;
}
```

### Skills component template

Swap `<app-tag>` → `<app-skill-badge>` and rename the wrapper class for grid spacing:

```html
<div class="skill-badges">
  @for (skill of cat.skills; track skill.name) {
    <app-skill-badge [skill]="skill" />
  }
</div>
```

`skills.component.css` add:

```css
.skill-badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}
```

(Replaces the old `.skill-tags` rule.)

`skills.component.ts` — drop `TagComponent` import, add `SkillBadgeComponent`.

---

## Files changed

| File | Type |
|---|---|
| `src/app/core/models/portfolio.model.ts` | Edit — add `Skill` interface, change `SkillCategory.skills` type |
| `src/app/data/portfolio.data.ts` | Edit — convert all skill arrays from strings to `Skill` objects |
| `src/app/shared/components/skill-badge/skill-badge.component.ts` | New |
| `src/app/shared/components/skill-badge/skill-badge.component.css` | New |
| `src/app/sections/skills/skills.component.html` | Edit — `<app-tag>` → `<app-skill-badge>` |
| `src/app/sections/skills/skills.component.css` | Edit — add `.skill-badges` rule |
| `src/app/sections/skills/skills.component.ts` | Edit — swap import |

`TagComponent` is **not** changed. Experience timeline still uses it.

---

## Verification

1. `npm run build` — zero TS / template errors
2. `npm start` → `http://localhost:4200`:
   - Each category card shows skill tiles as small dark squares with a colored brand icon and the name beneath
   - Brand icons (HTML5 shield, CSS3 shield, Java orange, Spring leaf, Docker whale, etc.) render correctly
   - Fallback icons render in accent color for skills without a brand logo (Microservices, Soft Skills, etc.)
   - Hover lifts and accent-borders the tile (consistent with site's hover pattern)
   - Layout still 2-column on desktop, 1-column on ≤768px
3. Network tab: SVG icon requests go to `cdn.jsdelivr.net` and return 200 (each ~1-3 KB)
4. No console warnings; tiles look good in both dark and light theme

## Out of scope

- Vendoring icons locally (can be done later by running a download script and switching `iconUrl()` to a relative `/assets/skill-icons/` path)
- Adding new skills or restructuring categories
- Changing the category card outer styling
