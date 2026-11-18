import { Component, computed, signal } from '@angular/core';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { ProjectCard } from './project-card/project-card';
import { PROJECTS } from './projects.data';

@Component({
  imports: [SectionTitle, ProjectCard],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly activeIndex = signal(0);
  protected readonly activeProject = computed(() => this.projects[this.activeIndex()]);
}
