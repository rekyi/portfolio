import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';

/** One-page home that stacks all portfolio sections. */
@Component({
  imports: [Hero, About, Skills, Projects, Testimonials, Contact],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
