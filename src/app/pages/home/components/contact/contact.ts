import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactService } from '../../../../core/services/contact';
import { PrimaryButton } from '../../../../shared/components/primary-button/primary-button';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { StableText } from '../../../../shared/components/stable-text/stable-text';
import { ContactRequest, SendStatus } from '../../../../shared/models/contact.model';

/** Contact section with a reactive form that sends messages via {@link ContactService}. */
@Component({
  imports: [
    RouterLink,
    ReactiveFormsModule,
    TranslatePipe,
    PrimaryButton,
    SectionTitle,
    StableText,
  ],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly contactService = inject(ContactService);

  /** Whether a request is in flight; prevents double submits. */
  protected readonly isSending = signal(false);

  /** Result of the last send attempt, shown as feedback below the form. */
  protected readonly sendStatus = signal<SendStatus>('idle');

  /**
   * Contact form: text fields validate on blur, the privacy checkbox on change.
   * `website` is a hidden honeypot field that only bots fill in.
   */
  protected readonly contactForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    website: new FormControl('', { nonNullable: true }),
    privacy: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
      updateOn: 'change',
    }),
  });

  /** Sends the form if it is valid and no request is pending. */
  protected handleSubmit(): void {
    if (this.contactForm.invalid || this.isSending()) return;
    this.isSending.set(true);
    this.sendStatus.set('idle');
    this.contactService.send(this.getContactRequest()).subscribe({
      next: () => this.handleSendSuccess(),
      error: () => this.handleSendError(),
    });
  }

  /** Scrolls the window back to the top of the page. */
  protected scrollToTop(): void {
    window.scrollTo({ top: 0 });
  }

  /**
   * Builds the request payload from the form values.
   *
   * @returns All form values except the privacy checkbox.
   */
  private getContactRequest(): ContactRequest {
    const { name, email, message, website } = this.contactForm.getRawValue();
    return { name, email, message, website };
  }

  /** Shows the success message and resets the form. */
  private handleSendSuccess(): void {
    this.isSending.set(false);
    this.sendStatus.set('success');
    this.contactForm.reset();
  }

  /** Shows the error message and keeps the input for another attempt. */
  private handleSendError(): void {
    this.isSending.set(false);
    this.sendStatus.set('error');
  }
}
