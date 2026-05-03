import { ChangeDetectionStrategy, Component } from '@angular/core';
import { certifications } from '../../data/portfolio.data';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-certifications',
  imports: [SectionTitleComponent, RevealOnScrollDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent {
  protected readonly certs = certifications;
}
