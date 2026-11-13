import { Component } from '@angular/core';
import { PrimaryButton } from '../../../../shared/components/primary-button/primary-button';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
  imports: [PrimaryButton, SectionTitle],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {}
