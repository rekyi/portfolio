import { Component, input } from '@angular/core';

/** Inline SVG logo used in navbar, hero and footer. */
@Component({
  selector: 'app-logo',
  styleUrl: './logo.scss',
  templateUrl: './logo.html',
})
export class Logo {
  /** Whether the arms and core of the logo are animated (used in the hero). */
  readonly isAnimated = input(false);
}
