import { Component, input } from '@angular/core';
import { StableText } from '../../../../../shared/components/stable-text/stable-text';
import { Testimonial } from '../../../../../shared/models/testimonial.model';

@Component({
  imports: [StableText],
  selector: 'app-testimonial-card',
  styleUrl: './testimonial-card.scss',
  templateUrl: './testimonial-card.html',
})
export class TestimonialCard {
  readonly testimonial = input.required<Testimonial>();
}
