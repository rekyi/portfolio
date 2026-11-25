import { Skill } from './skill.model';

/** Project shown in the projects section; optional fields hide their block when missing. */
export interface Project {
  /** Translation key of the title. */
  titleKey: string;
  /** Translation key of the project duration. */
  durationKey?: string;
  /** Technologies used. */
  technologies: Skill[];
  /** Translation key of the description. */
  aboutKey: string;
  /** Translation key of the work process text. */
  workProcessKey?: string;
  /** Translation key of the group work text. */
  groupWorkKey?: string;
  /** Translation key of the learnings text. */
  learningsKey?: string;
  /** Absolute paths of the slider images. */
  images?: string[];
  /** URL of the live demo. */
  liveUrl?: string;
  /** URL of the GitHub repository. */
  githubUrl?: string;
  /** Whether the project is still in progress; changes how its card is laid out. */
  isOngoing?: boolean;
}
