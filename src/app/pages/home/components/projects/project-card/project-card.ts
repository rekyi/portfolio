import { Component, input } from '@angular/core';
import { PrimaryButton } from '../../../../../shared/components/primary-button/primary-button';
import { StableText } from '../../../../../shared/components/stable-text/stable-text';
import { Project } from '../../../../../shared/models/project.model';
import { ProjectSlider } from '../project-slider/project-slider';

@Component({
  imports: [PrimaryButton, StableText, ProjectSlider],
  selector: 'app-project-card',
  styleUrl: './project-card.scss',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
