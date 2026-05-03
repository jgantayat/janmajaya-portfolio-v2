import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  readonly revealDelay = input<number>(0);

  private readonly host = inject(ElementRef<HTMLElement>);
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    const el = this.host.nativeElement;
    el.classList.add('reveal');

    const delay = this.revealDelay();
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('revealed');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
