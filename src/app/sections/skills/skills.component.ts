import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skillCategories } from '../../data/portfolio.data';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { TagComponent } from '../../shared/components/tag/tag.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  imports: [SectionTitleComponent, TagComponent, RevealOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly categories = skillCategories;
}
