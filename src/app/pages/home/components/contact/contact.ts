import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrimaryButton } from '../../../../shared/components/primary-button/primary-button';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
  imports: [RouterLink, PrimaryButton, SectionTitle],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  protected scrollToTop(): void {
    window.scrollTo({ top: 0 });
  }
}
