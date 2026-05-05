import { ChangeDetectionStrategy, Component } from '@angular/core';
import { education } from '../../data/portfolio.data';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { TagComponent } from '../../shared/components/tag/tag.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-education',
  imports: [SectionTitleComponent, TagComponent, RevealOnScrollDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  protected readonly edu = education;
}
