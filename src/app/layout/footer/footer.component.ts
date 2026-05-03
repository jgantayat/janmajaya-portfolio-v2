import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { personalInfo } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly scroll = inject(ScrollService);
  protected readonly info = personalInfo;
  protected readonly year = new Date().getFullYear();

  scrollToTop(): void {
    this.scroll.scrollTo('hero');
  }
}
