import { Component, computed, signal } from '@angular/core';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { StableText } from '../../../../shared/components/stable-text/stable-text';
import { ProjectCard } from './project-card/project-card';
import { PROJECTS } from './projects.data';

@Component({
  imports: [SectionTitle, StableText, ProjectCard],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly activeIndex = signal(0);
  protected readonly activeProject = computed(() => this.projects[this.activeIndex()]);

  protected isCardRemoved(index: number): boolean {
    if (index === this.activeIndex()) return false;
    return Boolean(this.activeProject().isOngoing || this.projects[index].isOngoing);
  }
}
