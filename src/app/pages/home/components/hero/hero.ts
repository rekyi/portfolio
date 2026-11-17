import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinks } from '../../../../shared/components/social-links/social-links';

@Component({
  imports: [RouterLink, SocialLinks],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}
