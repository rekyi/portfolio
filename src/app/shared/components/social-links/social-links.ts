import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SocialLinkVariant } from '../../models/social-link.model';
import { SOCIAL_LINKS } from '../../models/social-links.data';

@Component({
  imports: [TranslatePipe],
  selector: 'app-social-links',
  styleUrl: './social-links.scss',
  templateUrl: './social-links.html',
})
export class SocialLinks {
  readonly variant = input<SocialLinkVariant>('hero');
  protected readonly links = SOCIAL_LINKS;
}
