import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contactMethods, personalInfo } from '../../data/portfolio.data';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  imports: [SectionTitleComponent, RevealOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  protected readonly methods = contactMethods;
  protected readonly info = personalInfo;
}
