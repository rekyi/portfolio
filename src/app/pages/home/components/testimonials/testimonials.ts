import { Component } from '@angular/core';
import { StableText } from '../../../../shared/components/stable-text/stable-text';
import { TestimonialCard } from './testimonial-card/testimonial-card';
import { TESTIMONIALS } from './testimonials.data';

@Component({
  imports: [StableText, TestimonialCard],
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  protected readonly testimonials = TESTIMONIALS;
}
