import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Skill } from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-skill-badge',
  template: `
    <div class="badge">
      @if (skill().iconKey) {
        <img
          class="badge-icon"
          [src]="iconUrl()"
          [alt]="skill().name + ' logo'"
          width="32"
          height="32"
          loading="lazy"
        />
      } @else {
        <svg
          class="badge-icon fallback"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path [attr.d]="skill().fallbackPath ?? defaultPath" />
        </svg>
      }
      <span class="badge-name">{{ skill().name }}</span>
    </div>
  `,
  styleUrl: './skill-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillBadgeComponent {
  readonly skill = input.required<Skill>();

  protected readonly defaultPath = 'M9 12l2 2 4-4';

  protected readonly iconUrl = computed(() => {
    const key = this.skill().iconKey;
    if (!key) return '';
    const variant = this.skill().iconVariant ?? 'original';
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${key}/${key}-${variant}.svg`;
  });
}
