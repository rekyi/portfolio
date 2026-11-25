import { Component, computed, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SocialLinkVariant } from '../../models/social-link.model';
import { SOCIAL_LINKS } from '../../models/social-links.data';

/** Icon links to email, GitHub and LinkedIn with hover icons. */
@Component({
  imports: [TranslatePipe],
  selector: 'app-social-links',
  styleUrl: './social-links.scss',
  templateUrl: './social-links.html',
})
export class SocialLinks {
  /** Placement that decides icon set and order. */
  readonly variant = input<SocialLinkVariant>('hero');

  /** Links of the current placement in display order. */
  protected readonly links = computed(() => SOCIAL_LINKS[this.variant()]);
}
