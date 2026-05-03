import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-timeline-item',
  imports: [TagComponent],
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineItemComponent {
  readonly title = input('');
  readonly organisation = input('');
  readonly period = input('');
  readonly location = input('');
  readonly description = input('');
  readonly score = input('');
  readonly tags = input<string[]>([]);
  readonly isCurrent = input(false);
}
