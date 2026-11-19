import { Component, computed, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

const SWIPE_THRESHOLD = 50;
const MAX_DOTS = 3;

@Component({
  imports: [TranslatePipe],
  selector: 'app-project-slider',
  styleUrl: './project-slider.scss',
  templateUrl: './project-slider.html',
})
export class ProjectSlider {
  readonly images = input.required<string[]>();
  readonly titleKey = input.required<string>();

  protected readonly currentIndex = signal(0);
  protected readonly trackOffset = computed(() => `${this.currentIndex() * -100}%`);
  protected readonly hasMultipleImages = computed(() => this.images().length > 1);
  protected readonly dotTargets = computed(() => this.getDotTargets(this.images().length));
  protected readonly activeDot = computed(() => this.getActiveDot());
  private readonly pointerStartX = signal(0);

  protected showSlide(index: number): void {
    const count = this.images().length;
    this.currentIndex.set((index + count) % count);
  }

  protected handlePointerDown(event: PointerEvent): void {
    this.pointerStartX.set(event.clientX);
  }

  protected handlePointerUp(event: PointerEvent): void {
    const deltaX = event.clientX - this.pointerStartX();
    if (!this.hasMultipleImages() || Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    this.showSlide(this.currentIndex() + (deltaX < 0 ? 1 : -1));
  }

  private getDotTargets(count: number): number[] {
    if (count < 2) return [];
    if (count <= MAX_DOTS) return Array.from({ length: count }, (_, index) => index);
    return [0, Math.floor((count - 1) / 2), count - 1];
  }

  private getActiveDot(): number {
    const index = this.currentIndex();
    if (this.images().length <= MAX_DOTS || index === 0) return index;
    return index === this.images().length - 1 ? MAX_DOTS - 1 : 1;
  }
}
