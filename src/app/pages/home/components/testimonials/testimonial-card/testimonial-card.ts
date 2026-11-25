import { Component, input } from '@angular/core';
import { StableText } from '../../../../../shared/components/stable-text/stable-text';
import { Testimonial } from '../../../../../shared/models/testimonial.model';

/** Card with a translated quote, its author and a LinkedIn link. */
@Component({
  imports: [StableText],
  selector: 'app-testimonial-card',
  styleUrl: './testimonial-card.scss',
  templateUrl: './testimonial-card.html',
})
export class TestimonialCard {
  /** Testimonial to display. */
  readonly testimonial = input.required<Testimonial>();
}
