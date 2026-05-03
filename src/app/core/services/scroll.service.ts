import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly activeSection = signal<string>('hero');

  private readonly sectionIds = [
    'hero',
    'about',
    'skills',
    'experience',
    'education',
    'projects',
    'certifications',
    'contact',
  ];

  private observer: IntersectionObserver | null = null;

  initObserver(): void {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;

    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: '-60px 0px -40% 0px' },
    );

    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  destroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
