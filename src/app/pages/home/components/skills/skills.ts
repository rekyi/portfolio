import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrimaryButton } from '../../../../shared/components/primary-button/primary-button';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { LEARNING_SKILLS, SKILLS } from './skills.data';

@Component({
  imports: [PrimaryButton, RouterLink, SectionTitle],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly skills = SKILLS;
  protected readonly learningSkills = LEARNING_SKILLS;
}
