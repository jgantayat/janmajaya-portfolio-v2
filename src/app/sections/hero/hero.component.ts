import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';
import { personalInfo } from '../../data/portfolio.data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero',
  imports: [RevealOnScrollDirective, NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  protected readonly scroll = inject(ScrollService);
  protected readonly info = personalInfo;

  protected readonly displayedText = signal('');
  protected readonly isDeleting = signal(false);
  protected readonly quoteIndex = signal(0);

  protected readonly quotes = [
    '"First, solve the problem. Then, write the code." — John Johnson',
    '"Any fool can write code a computer can understand. Good programmers write code humans can understand." — M. Fowler',
    '"Make it work, make it right, make it fast." — Kent Beck',
    '"Talk is cheap. Show me the code." — Linus Torvalds',
    '"The best error message is the one that never shows up." — Thomas Fuchs',
    '"Simplicity is the soul of efficiency." — Austin Freeman',
    '"Code is like humor. When you have to explain it, it\'s bad." — Cory House',
    '"Programs must be written for people to read." — Hal Abelson',
  ];

  private readonly canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('matrixCanvas');

  private roleIndex = 0;
  private charIndex = 0;
  private typeTimer: ReturnType<typeof setTimeout> | null = null;
  private quoteTimer: ReturnType<typeof setInterval> | null = null;
  private animFrame: number | null = null;
  private resizeHandler: (() => void) | null = null;

  ngOnInit(): void {
    this.tickTypewriter();
    this.startQuoteRotation();
  }

  private startQuoteRotation(): void {
    this.quoteTimer = setInterval(() => {
      this.quoteIndex.update(i => (i + 1) % this.quotes.length);
    }, 8000);
  }

  ngAfterViewInit(): void {
    this.initMatrix();
  }

  ngOnDestroy(): void {
    if (this.typeTimer) clearTimeout(this.typeTimer);
    if (this.quoteTimer) clearInterval(this.quoteTimer);
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    if (this.resizeHandler) window.removeEventListener('resize', this.resizeHandler);
  }

  private tickTypewriter(): void {
    const roles = this.info.roles;
    const current = roles[this.roleIndex];
    const speed = this.isDeleting() ? 40 : 80;

    if (!this.isDeleting() && this.charIndex <= current.length) {
      this.displayedText.set(current.substring(0, this.charIndex));
      this.charIndex++;
      this.typeTimer = setTimeout(() => this.tickTypewriter(), speed);
    } else if (!this.isDeleting() && this.charIndex > current.length) {
      this.typeTimer = setTimeout(() => {
        this.isDeleting.set(true);
        this.tickTypewriter();
      }, 2000);
    } else if (this.isDeleting() && this.charIndex > 0) {
      this.charIndex--;
      this.displayedText.set(current.substring(0, this.charIndex));
      this.typeTimer = setTimeout(() => this.tickTypewriter(), speed);
    } else {
      this.isDeleting.set(false);
      this.roleIndex = (this.roleIndex + 1) % roles.length;
      this.typeTimer = setTimeout(() => this.tickTypewriter(), 400);
    }
  }

  private initMatrix(): void {
    const canvasEl = this.canvasRef()?.nativeElement;
    if (!canvasEl) return;

    const ctx = canvasEl.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
    };
    resize();
    this.resizeHandler = resize;
    window.addEventListener('resize', resize);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\\|+=~`';
    const fontSize = 14;
    const cols = Math.max(1, Math.floor(canvasEl.width / fontSize));
    const drops: number[] = Array(cols).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(13, 13, 26, 0.05)';
      ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

      const accent =
        getComputedStyle(document.documentElement).getPropertyValue('--color-matrix').trim() ||
        'rgba(255,107,53,0.6)';

      ctx.fillStyle = accent;
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvasEl.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      this.animFrame = requestAnimationFrame(draw);
    };

    draw();
  }

  protected firstName(): string {
    return this.info.name.split(' ')[0];
  }

  protected lastName(): string {
    return this.info.name.split(' ').slice(1).join(' ');
  }

  protected goToProjects(): void {
    this.scroll.scrollTo('projects');
  }
}
