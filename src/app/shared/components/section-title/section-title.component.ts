import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitleComponent {
  readonly title = input('');
  readonly subtitle = input('');
  readonly label = input('');
  readonly align = input<'left' | 'center'>('left');
}
