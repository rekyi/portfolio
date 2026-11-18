import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../../../core/services/contact';
import { PrimaryButton } from '../../../../shared/components/primary-button/primary-button';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { ContactRequest, SendStatus } from '../../../../shared/models/contact.model';

@Component({
  imports: [RouterLink, ReactiveFormsModule, PrimaryButton, SectionTitle],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly contactService = inject(ContactService);

  protected readonly isSending = signal(false);
  protected readonly sendStatus = signal<SendStatus>('idle');

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

  protected handleSubmit(): void {
    if (this.contactForm.invalid || this.isSending()) return;
    this.isSending.set(true);
    this.sendStatus.set('idle');
    this.contactService.send(this.getContactRequest()).subscribe({
      next: () => this.handleSendSuccess(),
      error: () => this.handleSendError(),
    });
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0 });
  }

  private getContactRequest(): ContactRequest {
    const { name, email, message, website } = this.contactForm.getRawValue();
    return { name, email, message, website };
  }

  private handleSendSuccess(): void {
    this.isSending.set(false);
    this.sendStatus.set('success');
    this.contactForm.reset();
  }

  private handleSendError(): void {
    this.isSending.set(false);
    this.sendStatus.set('error');
  }
}
