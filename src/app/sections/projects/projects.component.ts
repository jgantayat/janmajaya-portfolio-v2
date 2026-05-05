import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { projects } from '../../data/portfolio.data';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { createAutoplay } from '../../shared/utils/autoplay';

const FILTERS = ['All', 'Angular', 'Java', 'Spring', 'TypeScript', 'JavaScript'] as const;
type Filter = (typeof FILTERS)[number];

@Component({
  selector: 'app-projects',
  imports: [SectionTitleComponent, ProjectCardComponent, RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly filters = FILTERS;
  protected readonly activeFilter = signal<Filter>('All');

  protected readonly filteredProjects = computed(() => {
    const f = this.activeFilter();
    if (f === 'All') return projects;
    const needle = f.toLowerCase();
    return projects.filter((p) => p.techStack.some((t) => t.toLowerCase().includes(needle)));
  });

  private readonly track = viewChild<ElementRef<HTMLDivElement>>('track');

  protected readonly autoplay = createAutoplay(3000, () => this.advance(1), this.destroyRef);

  constructor() {
    this.autoplay.start();
    effect(() => {
      this.activeFilter();
      const el = this.track()?.nativeElement;
      if (el) el.scrollTo({ left: 0, behavior: 'smooth' });
      this.autoplay.restart();
    });
  }

  setFilter(f: Filter): void {
    this.activeFilter.set(f);
  }

  onNavClick(direction: -1 | 1): void {
    this.advance(direction);
    this.autoplay.restart();
  }

  private advance(direction: -1 | 1): void {
    const el = this.track()?.nativeElement;
    if (!el) return;
    const item = el.querySelector<HTMLElement>('.track-item');
    if (!item) return;
    const gap = parseFloat(getComputedStyle(el).gap) || 0;
    const step = item.offsetWidth + gap;
    const maxScroll = el.scrollWidth - el.clientWidth;

    if (maxScroll <= 0) return;

    if (direction === 1 && el.scrollLeft >= maxScroll - 1) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction === -1 && el.scrollLeft <= 1) {
      el.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: direction * step, behavior: 'smooth' });
    }
  }
}
