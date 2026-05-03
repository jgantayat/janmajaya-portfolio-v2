import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';
import { navLinks } from '../../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  imports: [ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class NavbarComponent {
  protected readonly scroll = inject(ScrollService);
  protected readonly links = navLinks;
  protected readonly isScrolled = signal(false);
  protected readonly menuOpen = signal(false);

  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  scrollTo(id: string): void {
    this.scroll.scrollTo(id);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
