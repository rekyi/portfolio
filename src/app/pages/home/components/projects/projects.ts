import { Component } from '@angular/core';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { ProjectCard } from './project-card/project-card';

@Component({
  imports: [SectionTitle, ProjectCard],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {}
