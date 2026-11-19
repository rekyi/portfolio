import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PrimaryButton } from '../../../../../shared/components/primary-button/primary-button';
import { StableText } from '../../../../../shared/components/stable-text/stable-text';
import { Project } from '../../../../../shared/models/project.model';

@Component({
  imports: [TranslatePipe, PrimaryButton, StableText],
  selector: 'app-project-card',
  styleUrl: './project-card.scss',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
