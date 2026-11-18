import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinks } from '../../shared/components/social-links/social-links';

@Component({
  imports: [RouterLink, SocialLinks],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();
}
