import { Component, input } from '@angular/core';
import { Testimonial } from '../../../../../shared/models/testimonial.model';

@Component({
  imports: [],
  selector: 'app-testimonial-card',
  styleUrl: './testimonial-card.scss',
  templateUrl: './testimonial-card.html',
})
export class TestimonialCard {
  readonly testimonial = input.required<Testimonial>();
}
