import { ChangeDetectionStrategy, Component } from '@angular/core';
import { personalInfo, stats } from '../../data/portfolio.data';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  imports: [SectionTitleComponent, RevealOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly info = personalInfo;
  protected readonly stats = stats;
}
