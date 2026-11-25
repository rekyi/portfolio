import { Component } from '@angular/core';
import { StableText } from '../../../../shared/components/stable-text/stable-text';
import { TestimonialCard } from './testimonial-card/testimonial-card';
import { TESTIMONIALS } from './testimonials.data';

/** Testimonials section with quotes from former team members. */
@Component({
  imports: [StableText, TestimonialCard],
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  /** Testimonials in display order. */
  protected readonly testimonials = TESTIMONIALS;
}
