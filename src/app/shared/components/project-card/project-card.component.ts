import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-project-card',
  imports: [TagComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly title = input('');
  readonly description = input('');
  readonly techStack = input<string[]>([]);
  readonly githubUrl = input('');
  readonly liveUrl = input('');
}
