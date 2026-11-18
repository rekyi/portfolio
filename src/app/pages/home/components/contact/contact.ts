import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PrimaryButton } from '../../../../shared/components/primary-button/primary-button';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
  imports: [RouterLink, ReactiveFormsModule, PrimaryButton, SectionTitle],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
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
    privacy: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
      updateOn: 'change',
    }),
  });

  protected handleSubmit(): void {
    if (this.contactForm.invalid) return;
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0 });
  }
}
