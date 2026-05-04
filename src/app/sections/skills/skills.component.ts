import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skillCategories } from '../../data/portfolio.data';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { SkillBadgeComponent } from '../../shared/components/skill-badge/skill-badge.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  imports: [SectionTitleComponent, SkillBadgeComponent, RevealOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly categories = skillCategories;
}
