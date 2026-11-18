import { Component, input } from '@angular/core';

@Component({
  host: { '[class.secondary]': "variant() === 'secondary'" },
  imports: [],
  selector: 'a[appPrimaryButton], button[appPrimaryButton]',
  styleUrl: './primary-button.scss',
  templateUrl: './primary-button.html',
})
export class PrimaryButton {
  readonly variant = input<'primary' | 'secondary'>('primary');
}
