import { Component, computed, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

/** Minimum horizontal swipe distance in px that changes the slide. */
const SWIPE_THRESHOLD = 50;

/** Maximum number of pagination dots. */
const MAX_DOTS = 3;

/** Image slider of a project card with swipe support and up to {@link MAX_DOTS} dots. */
@Component({
  imports: [TranslatePipe],
  selector: 'app-project-slider',
  styleUrl: './project-slider.scss',
  templateUrl: './project-slider.html',
})
export class ProjectSlider {
  /** Image paths shown as slides. */
  readonly images = input.required<string[]>();

  /** Translation key of the project title, used in the image alt texts. */
  readonly titleKey = input.required<string>();

  /** Index of the visible slide. */
  protected readonly currentIndex = signal(0);

  /** CSS translate value that moves the track to the visible slide. */
  protected readonly trackOffset = computed(() => `${this.currentIndex() * -100}%`);

  /** Whether navigation controls are needed. */
  protected readonly hasMultipleImages = computed(() => this.images().length > 1);

  /** Slide index each pagination dot jumps to. */
  protected readonly dotTargets = computed(() => this.getDotTargets(this.images().length));

  /** Index of the highlighted dot. */
  protected readonly activeDot = computed(() => this.getActiveDot());

  /** Pointer x-position where the current swipe started. */
  private readonly pointerStartX = signal(0);

  /**
   * Shows the slide at the given index; wraps around at both ends.
   *
   * @param index - Target index; may be out of range by one in either direction.
   */
  protected showSlide(index: number): void {
    const count = this.images().length;
    this.currentIndex.set((index + count) % count);
  }

  /**
   * Stores where a swipe starts.
   *
   * @param event - Pointer down event on the slider.
   */
  protected handlePointerDown(event: PointerEvent): void {
    this.pointerStartX.set(event.clientX);
  }

  /**
   * Changes the slide if the swipe exceeds {@link SWIPE_THRESHOLD}:
   * swipe left shows the next, swipe right the previous slide.
   *
   * @param event - Pointer up event on the slider.
   */
  protected handlePointerUp(event: PointerEvent): void {
    const deltaX = event.clientX - this.pointerStartX();
    if (!this.hasMultipleImages() || Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    this.showSlide(this.currentIndex() + (deltaX < 0 ? 1 : -1));
  }

  /**
   * Computes the slides the dots point to: one dot per image up to {@link MAX_DOTS},
   * otherwise first, middle and last slide.
   *
   * @param count - Number of images.
   * @returns Slide indices; empty for fewer than two images.
   */
  private getDotTargets(count: number): number[] {
    if (count < 2) return [];
    if (count <= MAX_DOTS) return Array.from({ length: count }, (_, index) => index);
    return [0, Math.floor((count - 1) / 2), count - 1];
  }

  /**
   * Maps the visible slide to a dot. With more than {@link MAX_DOTS} images, first and last
   * slide highlight the outer dots and every slide in between the middle dot.
   *
   * @returns Index of the active dot.
   */
  private getActiveDot(): number {
    const index = this.currentIndex();
    if (this.images().length <= MAX_DOTS || index === 0) return index;
    return index === this.images().length - 1 ? MAX_DOTS - 1 : 1;
  }
}
