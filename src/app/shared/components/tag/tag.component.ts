import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  template: `
    <span class="tag" [class.accent]="variant() === 'accent'">
      {{ label() }}
    </span>
  `,
  styleUrl: './tag.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  readonly label = input('');
  readonly variant = input<'default' | 'accent'>('default');
}
