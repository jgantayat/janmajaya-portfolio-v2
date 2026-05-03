import { ChangeDetectionStrategy, Component } from '@angular/core';
import { experience } from '../../data/portfolio.data';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { TimelineItemComponent } from '../../shared/components/timeline-item/timeline-item.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  imports: [SectionTitleComponent, TimelineItemComponent, RevealOnScrollDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  protected readonly jobs = experience;
}
