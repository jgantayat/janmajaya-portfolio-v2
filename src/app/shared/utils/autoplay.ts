import { DestroyRef } from '@angular/core';

export interface AutoplayControl {
  start(): void;
  pause(): void;
  resume(): void;
  stop(): void;
  restart(): void;
}

export function createAutoplay(
  intervalMs: number,
  tick: () => void,
  destroyRef: DestroyRef,
): AutoplayControl {
  let timer: ReturnType<typeof setInterval> | null = null;
  let paused = false;

  const start = (): void => {
    if (timer !== null) return;
    timer = setInterval(() => {
      if (!paused) tick();
    }, intervalMs);
  };

  const stop = (): void => {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  };

  destroyRef.onDestroy(stop);

  return {
    start,
    pause: () => {
      paused = true;
    },
    resume: () => {
      paused = false;
    },
    stop,
    restart: () => {
      stop();
      paused = false;
      start();
    },
  };
}
