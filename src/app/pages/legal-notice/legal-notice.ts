import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language';

/** Legal notice page; DE and EN content are separate blocks in the template. */
@Component({
  imports: [RouterLink, TranslatePipe],
  selector: 'app-legal-notice',
  styleUrl: './legal-notice.scss',
  templateUrl: './legal-notice.html',
})
export class LegalNotice {
  /** Active language; selects the content block to render. */
  protected readonly currentLang = inject(LanguageService).currentLang;
}
