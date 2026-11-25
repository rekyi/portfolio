import { Component, input } from '@angular/core';

/**
 * Attribute component that styles a native `<a>` or `<button>` as a call-to-action button.
 *
 * @example
 * ```html
 * <button appPrimaryButton type="submit">Send</button>
 * <a appPrimaryButton variant="secondary" routerLink="/">Home</a>
 * ```
 */
@Component({
  host: { '[class.secondary]': "variant() === 'secondary'" },
  imports: [],
  selector: 'a[appPrimaryButton], button[appPrimaryButton]',
  styleUrl: './primary-button.scss',
  templateUrl: './primary-button.html',
})
export class PrimaryButton {
  /** Visual style; `secondary` adds the `secondary` host class. */
  readonly variant = input<'primary' | 'secondary'>('primary');
}
