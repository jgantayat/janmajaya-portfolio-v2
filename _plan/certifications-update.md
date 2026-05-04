# Plan: Refresh certifications with images + verify URLs

## Context

The Certifications section currently shows 4 abstract "initial letter" tile badges with no images and no verification links. The user has supplied 5 real certificates with their image files (already dropped in `src/assets/`) and credential-verification URLs. We need to display the actual certificate image in each card and wire each card to its verify URL.

## Cert data (final list)

| # | Name | Issuer | Image (in `src/assets/`) | Verify URL |
|---|---|---|---|---|
| 1 | AWS Certified AI Practitioner | Amazon Web Services | `AWS Certified AI Practitioner.png` | https://www.credly.com/badges/9a7c1af3-50d4-4b04-bffe-6294e2657552/linked_in_profile |
| 2 | AWS Certified Cloud Practitioner | Amazon Web Services | `AWS Certified Cloud Practitioner.png` | https://www.credly.com/badges/c1f3621d-4f44-4b2b-ba9d-dccb92d6fd28 |
| 3 | GitHub Copilot | GitHub | `GitHub Copilot.png` | https://www.credly.com/badges/186074b9-5f77-43d9-87c6-75db6b4e6325/linked_in_profile |
| 4 | Spring Boot 0 to 1 — Fundamentals | Coding Shuttle | `Spring Boot 0 to 1 - Fundamentals.png` | https://app.codingshuttle.com/certificate/verify/P11I29PF |
| 5 | PMI Agile Certified Practitioner (PMI-ACP) | LinkedIn Learning | `PMI Agile Certified Practitioner (PMI-ACP).png` | https://www.linkedin.com/learning/certificates/50387a97b6b4f94f9e7654326805e41dcd64ba920216a817732793cacdc32670 |

The previous "Introduction to Git and GitHub" entry is replaced by this list.

## Files to modify

| File | Change |
|---|---|
| `src/app/core/models/portfolio.model.ts` | Add `imageUrl?: string` to `Certification`; make `badgeColor`/`badgeInitial` optional |
| `src/app/data/portfolio.data.ts` | Replace `certifications` array with the 5 entries above (image path + verify URL each) |
| `src/app/sections/certifications/certifications.component.html` | Switch from abstract badge tile to vertical image-on-top card |
| `src/app/sections/certifications/certifications.component.css` | Style the new vertical card (image header, info below, clickable hover) |
| `src/app/sections/certifications/certifications.component.ts` | Add `NgOptimizedImage` to imports |

## Card design (vertical)

The current design is horizontal: small initial badge ▸ name ▸ verify link. Replacing with a vertical card lets the cert image be the hero visual:

```
┌────────────────────────────┐
│                            │
│      [cert image]          │  ← clickable, links to verify URL
│       (16/10 ratio)        │
│                            │
├────────────────────────────┤
│  AWS Certified AI Pract..  │  ← name
│  amazon web services       │  ← issuer (mono, muted)
│                  verify ↗  │  ← bottom right
└────────────────────────────┘
```

Grid stays `2-col on desktop, 1-col on ≤768px` (matches all other sections).

### HTML

```html
<div class="cert-grid">
  @for (cert of certs; track cert.name; let i = $index) {
    <article class="cert-card card" appRevealOnScroll [revealDelay]="i * 80">

      @if (cert.verifyUrl) {
        <a
          [href]="cert.verifyUrl"
          target="_blank"
          rel="noopener"
          class="cert-image-link"
          [attr.aria-label]="'View credential for ' + cert.name"
        >
          <img
            [ngSrc]="cert.imageUrl ?? ''"
            [alt]="cert.name + ' certificate'"
            width="800"
            height="500"
            loading="lazy"
            class="cert-image"
          />
        </a>
      } @else {
        <img
          [ngSrc]="cert.imageUrl ?? ''"
          [alt]="cert.name + ' certificate'"
          width="800"
          height="500"
          loading="lazy"
          class="cert-image"
        />
      }

      <div class="cert-info">
        <h3 class="cert-name">{{ cert.name }}</h3>
        <span class="cert-issuer mono">{{ cert.issuer }}</span>
        @if (cert.verifyUrl) {
          <a
            [href]="cert.verifyUrl"
            target="_blank"
            rel="noopener"
            class="verify-link mono"
          >verify ↗</a>
        }
      </div>

    </article>
  }
</div>
```

### CSS

```css
.cert-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
}

@media (max-width: 768px) {
  .cert-grid { grid-template-columns: 1fr; }
}

.cert-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
}

.cert-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
}

.cert-image-link {
  display: block;
  background: var(--color-bg-secondary);
  overflow: hidden;
}

.cert-image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: contain;
  background: var(--color-bg-secondary);
  transition: transform var(--transition-base);
  display: block;
}

.cert-image-link:hover .cert-image { transform: scale(1.03); }

.cert-info {
  padding: var(--space-4) var(--space-5) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  border-top: 1px solid var(--color-border);
}

.cert-name {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: 1.3;
}

.cert-issuer {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
  text-transform: lowercase;
}

.verify-link {
  align-self: flex-end;
  margin-top: var(--space-3);
  font-size: var(--text-xs);
  color: var(--color-accent);
  transition: opacity var(--transition-fast);
}

.verify-link:hover { opacity: 0.7; }

.mono { font-family: var(--font-mono); }
```

(Removes `.cert-badge`, `.badge-initial`, `.verified-badge` rules that are no longer used.)

### TS

```ts
import { NgOptimizedImage } from '@angular/common';
// ...
imports: [SectionTitleComponent, RevealOnScrollDirective, NgOptimizedImage],
```

### Data shape

```ts
{
  name: 'AWS Certified AI Practitioner',
  issuer: 'Amazon Web Services',
  imageUrl: 'assets/AWS Certified AI Practitioner.png',
  verifyUrl: 'https://www.credly.com/badges/9a7c1af3-50d4-4b04-bffe-6294e2657552/linked_in_profile',
},
```

The filenames have spaces — Angular handles this fine, paths are URL-decoded by the browser. Could rename to kebab-case later if you prefer cleaner URLs, but no need to block on it.

`badgeColor` / `badgeInitial` become optional in the model (kept on the interface for future flexibility, but unused by the new template).

## Verification

1. `npm run build` — clean build; the 5 PNGs are picked up automatically because `src/assets/` is already in the `angular.json` `assets` array
2. `npm start` → scroll to Certifications:
   - 5 cards in 2-column grid (1-column ≤768px)
   - Each card shows the actual certificate image scaled to a 16:10 box (object-fit: contain so the cert image isn't cropped)
   - Image is clickable; opens the verify URL in a new tab
   - Below the image: name, issuer (lowercase mono), and a "verify ↗" link aligned right
   - Hover lifts the card and slightly scales the image
3. Inspect Network tab — each cert image loads from `/assets/...png` with 200 status
4. No console warnings (NgOptimizedImage emits warnings for missing width/height — both supplied at 800×500 placeholder dims)

## Out of scope

- Lightbox / fullscreen image viewer (clicking opens the verify URL instead — credential page is more useful than a static image)
- Renaming the PNG files to kebab-case (current names work fine)
- Image compression — Credly badges are already small (~100-150 KB), Spring Boot/PMI ones are ~150-300 KB; acceptable
