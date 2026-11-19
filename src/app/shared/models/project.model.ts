import { Skill } from './skill.model';

export interface Project {
  titleKey: string;
  durationKey?: string;
  technologies: Skill[];
  aboutKey: string;
  workProcessKey?: string;
  groupWorkKey?: string;
  learningsKey?: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  isOngoing?: boolean;
}
