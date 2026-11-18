import { Component, input } from '@angular/core';
import { PrimaryButton } from '../../../../../shared/components/primary-button/primary-button';
import { Project } from '../../../../../shared/models/project.model';

@Component({
  imports: [PrimaryButton],
  selector: 'app-project-card',
  styleUrl: './project-card.scss',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
