import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { recommendations } from '../../data/portfolio.data';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { createAutoplay } from '../../shared/utils/autoplay';

@Component({
  selector: 'app-recommendations',
  imports: [SectionTitleComponent, RevealOnScrollDirective, NgOptimizedImage],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsComponent {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly recs = recommendations;
  protected readonly activeIndex = signal(0);

  protected readonly autoplay = createAutoplay(3000, () => this.advance(), this.destroyRef);

  constructor() {
    this.autoplay.start();
  }

  setIndex(i: number): void {
    const total = this.recs.length;
    const next = ((i % total) + total) % total;
    this.activeIndex.set(next);
    this.autoplay.restart();
  }

  prev(): void {
    this.setIndex(this.activeIndex() - 1);
  }

  next(): void {
    this.setIndex(this.activeIndex() + 1);
  }

  private advance(): void {
    this.activeIndex.update((i) => (i + 1) % this.recs.length);
  }
}
