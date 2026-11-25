import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrimaryButton } from '../../../../shared/components/primary-button/primary-button';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { StableText } from '../../../../shared/components/stable-text/stable-text';
import { LEARNING_SKILLS, SKILLS } from './skills.data';

/** Skills section with the current tech stack and the technologies being learned. */
@Component({
  imports: [PrimaryButton, RouterLink, SectionTitle, StableText],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  /** Technologies of the current tech stack. */
  protected readonly skills = SKILLS;

  /** Technologies currently being learned. */
  protected readonly learningSkills = LEARNING_SKILLS;
}
