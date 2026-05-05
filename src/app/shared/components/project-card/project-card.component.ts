import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
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
  readonly iconKey = input('');

  protected readonly iconUrl = computed(() => {
    const key = this.iconKey();
    if (!key) return '';
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${key}/${key}-original.svg`;
  });
}
