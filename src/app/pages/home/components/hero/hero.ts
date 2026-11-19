import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { SocialLinks } from '../../../../shared/components/social-links/social-links';
import { StableText } from '../../../../shared/components/stable-text/stable-text';

@Component({
  imports: [RouterLink, TranslatePipe, SocialLinks, StableText],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}
