import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  styleUrl: './logo.scss',
  templateUrl: './logo.html',
})
export class Logo {
  readonly isAnimated = input(false);
}
