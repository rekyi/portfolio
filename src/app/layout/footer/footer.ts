import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { SocialLinks } from '../../shared/components/social-links/social-links';
import { StableText } from '../../shared/components/stable-text/stable-text';

@Component({
  imports: [RouterLink, TranslatePipe, SocialLinks, StableText],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();
}
