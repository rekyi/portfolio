import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Logo } from '../../shared/components/logo/logo';
import { SocialLinks } from '../../shared/components/social-links/social-links';
import { StableText } from '../../shared/components/stable-text/stable-text';

/** Site footer with logo, social links, copyright and links to the legal pages. */
@Component({
  imports: [RouterLink, TranslatePipe, Logo, SocialLinks, StableText],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  /** Year shown in the copyright notice. */
  protected readonly currentYear = new Date().getFullYear();
}
