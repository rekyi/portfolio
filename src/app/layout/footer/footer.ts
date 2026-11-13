import { Component } from '@angular/core';
import { SocialLinks } from '../../shared/components/social-links/social-links';

@Component({
  imports: [SocialLinks],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {}
