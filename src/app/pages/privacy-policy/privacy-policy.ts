import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language';

/** Privacy policy page; DE and EN content are separate blocks in the template. */
@Component({
  imports: [RouterLink, TranslatePipe],
  selector: 'app-privacy-policy',
  styleUrl: './privacy-policy.scss',
  templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {
  /** Active language; selects the content block to render. */
  protected readonly currentLang = inject(LanguageService).currentLang;
}
