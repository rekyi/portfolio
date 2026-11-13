import { Component } from '@angular/core';
import { SocialLinks } from '../../../../shared/components/social-links/social-links';

@Component({
  imports: [SocialLinks],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}
