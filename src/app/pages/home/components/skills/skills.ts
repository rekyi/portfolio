import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrimaryButton } from '../../../../shared/components/primary-button/primary-button';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
  imports: [PrimaryButton, RouterLink, SectionTitle],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {}
