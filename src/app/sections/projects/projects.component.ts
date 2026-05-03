import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { projects } from '../../data/portfolio.data';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

const FILTERS = ['All', 'Angular', 'Java', 'Spring Boot', 'AWS', 'TypeScript'] as const;
type Filter = (typeof FILTERS)[number];

@Component({
  selector: 'app-projects',
  imports: [SectionTitleComponent, ProjectCardComponent, RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly filters = FILTERS;
  protected readonly activeFilter = signal<Filter>('All');

  protected readonly filteredProjects = computed(() => {
    const f = this.activeFilter();
    if (f === 'All') return projects;
    const needle = f.toLowerCase();
    return projects.filter((p) => p.techStack.some((t) => t.toLowerCase().includes(needle)));
  });

  setFilter(f: Filter): void {
    this.activeFilter.set(f);
  }
}
