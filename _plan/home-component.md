# Plan: Home Component

## Files to create / modify

| Action | Path |
|--------|------|
| Create | `src/app/home/home.ts` |
| Create | `src/app/home/home.html` |
| Create | `src/app/home/home.css` |
| Modify | `src/app/app.routes.ts` |
| Modify | `src/styles.css` (promote CSS variables) |

---

## Component structure (`home.ts`)

- `ChangeDetectionStrategy.OnPush`
- No `standalone: true` (default in Angular v20+)
- Imports: `RouterLink` only (no service dependencies yet)
- No signals needed for Phase 1 static content — will be added in Phase 2 when personal data is wired in

---

## Template structure (`home.html`)

```
<main>
  <section class="hero" aria-label="Introduction">
    <p class="eyebrow">Hi, I'm</p>
    <h1>Janmajaya Gantayat</h1>
    <p class="tagline">Full-Stack Engineer · Angular · Node.js</p>
    <p class="bio">Brief one-liner about what I build / care about.</p>
    <div class="cta-group">
      <a routerLink="/work" class="btn btn--primary">View My Work</a>
      <a routerLink="/contact" class="btn btn--ghost">Get in Touch</a>
    </div>
  </section>
</main>
```

- Single `<h1>` per page (accessibility requirement)
- `<main>` landmark for skip-nav
- All interactive elements are native `<a>` tags (keyboard and screen-reader friendly)
- `aria-label` on `<section>` for screen reader context

---

## Styles (`home.css`)

- `:host` sets `display: block`
- `hero` section: full-viewport-height flex column, centred
- `h1` uses Inter Tight, gradient text via `-webkit-background-clip: text` with `--red-to-pink-to-purple-horizontal-gradient`
- `.btn--primary`: filled pill using `--electric-violet`
- `.btn--ghost`: outlined pill, border `--electric-violet`
- Mobile breakpoint at 650px: stack CTA buttons, reduce font sizes

---

## CSS variables strategy

The design tokens are currently inside a `<style>` block in `app.html`. CSS custom properties cascade through Angular's emulated encapsulation, so child components can already consume them. **No change needed to `src/styles.css` for Phase 1.**

---

## Routing (`app.routes.ts`)

Add a lazy-loaded route for `/`:

```ts
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.Home),
  },
];
```

---

## Accessibility checklist

- [ ] Single `<h1>` on the page
- [ ] Colour contrast ≥ 4.5:1 for all text
- [ ] Focus ring visible on both CTA buttons
- [ ] `<main>` landmark present
- [ ] No `tabindex` > 0

---

## What's NOT included (Phase 2)

- Real bio text / personal data (added in Phase 2)
- Social links (own component)
- Scroll animations
