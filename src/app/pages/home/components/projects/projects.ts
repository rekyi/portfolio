import { Component, computed, signal } from '@angular/core';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { StableText } from '../../../../shared/components/stable-text/stable-text';
import { ProjectCard } from './project-card/project-card';
import { PROJECTS } from './projects.data';

/** Projects section with one tab per project; only the selected card is visible. */
@Component({
  imports: [SectionTitle, StableText, ProjectCard],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  /** All projects in tab order. */
  protected readonly projects = PROJECTS;

  /** Index of the selected tab. */
  protected readonly activeIndex = signal(0);

  /** Project of the selected tab. */
  protected readonly activeProject = computed(() => this.projects[this.activeIndex()]);

  /**
   * Decides whether a card is taken out of the layout (`display: none`).
   * Hidden cards normally stay in the grid so the panel keeps the height of the tallest card;
   * ongoing projects are excluded from this, both as active and as hidden card.
   *
   * @param index - Index of the card.
   * @returns `true` if the card should be removed from the layout.
   */
  protected isCardRemoved(index: number): boolean {
    if (index === this.activeIndex()) return false;
    return Boolean(this.activeProject().isOngoing || this.projects[index].isOngoing);
  }
}
