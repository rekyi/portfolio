import { Component, computed, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectImage } from '../../../../../shared/models/project.model';

const SWIPE_THRESHOLD = 50;

@Component({
  imports: [TranslatePipe],
  selector: 'app-project-slider',
  styleUrl: './project-slider.scss',
  templateUrl: './project-slider.html',
})
export class ProjectSlider {
  readonly images = input.required<ProjectImage[]>();
  readonly titleKey = input.required<string>();

  protected readonly currentIndex = signal(0);
  protected readonly trackOffset = computed(() => `${this.currentIndex() * -100}%`);
  protected readonly hasMultipleImages = computed(() => this.images().length > 1);
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
}
