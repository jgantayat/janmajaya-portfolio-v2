import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ScrollService } from '../core/services/scroll.service';
import { AboutComponent } from '../sections/about/about.component';
import { CertificationsComponent } from '../sections/certifications/certifications.component';
import { ContactComponent } from '../sections/contact/contact.component';
import { EducationComponent } from '../sections/education/education.component';
import { ExperienceComponent } from '../sections/experience/experience.component';
import { HeroComponent } from '../sections/hero/hero.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-layout',
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent,
  ],
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit, OnDestroy {
  private readonly scroll = inject(ScrollService);
  private initTimer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.initTimer = setTimeout(() => this.scroll.initObserver(), 500);
  }

  ngOnDestroy(): void {
    if (this.initTimer) clearTimeout(this.initTimer);
    this.scroll.destroy();
  }
}
